package com.mercury.fileuploads3javaserver.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.HttpMethod;
import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GeneratePresignedUrlRequest;
import com.mercury.fileuploads3javaserver.config.AWSConfig;
import com.mercury.fileuploads3javaserver.controller.dto.FileDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.net.URL;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Service
public class FileUploadService {

    private static final Logger LOGGER = LoggerFactory.getLogger(FileUploadService.class);
    private Map<String, String> downloadUrls = new ConcurrentHashMap<>();

    @Autowired
    AWSConfig awsConfig;
    private AmazonS3 s3Client;

    @PostConstruct
    private void init() {
        AWSCredentials credentials = new BasicAWSCredentials(
                awsConfig.getAccessKey(),
                awsConfig.getSecretKey()
        );
        s3Client = AmazonS3ClientBuilder.standard()
                .withRegion(awsConfig.getRegion())
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .build();
    }

    public List<FileDTO> getSignedUrls(List<String> fileList, boolean useSignedUrlForDownload) {
        return fileList.stream()
                .map(file -> getSignedUrl(file, useSignedUrlForDownload))
                .collect(Collectors.toList());
    }

    public FileDTO getSignedUrl(String objectKey, boolean useSignedUrlForDownload) {
        try {
            Date expiration = new Date();
            long expTimeMillis = expiration.getTime();
            expTimeMillis += 1000 * 60 * 60;
            expiration.setTime(expTimeMillis);
            GeneratePresignedUrlRequest generatePresignedUrlRequestForUpload = new GeneratePresignedUrlRequest(awsConfig.getBucket(), objectKey)
                    .withMethod(HttpMethod.PUT)
                    .withExpiration(expiration);
            URL url = s3Client.generatePresignedUrl(generatePresignedUrlRequestForUpload);
            String downloadUrl = useSignedUrlForDownload ? download(objectKey) :s3Client.getUrl(awsConfig.getBucket(), objectKey).toExternalForm();
            return new FileDTO(objectKey, url.toString(), downloadUrl);
        } catch (AmazonServiceException e) {
            e.printStackTrace();
        } catch (SdkClientException e) {
            e.printStackTrace();
        }
        return new FileDTO();
    }

    public String download(String objectKey) {
        // may save in db as image url and rotate every month.
        // use redis(key with expiration) as cache to avoid too much db read.
        if (downloadUrls.get(objectKey) != null) {
            return downloadUrls.get(objectKey);
        }
        try {
            Date expiration = new Date();
            long expTimeMillis = expiration.getTime();
            expTimeMillis += 1000 * 60 * 60 * 24 * 7;
            expiration.setTime(expTimeMillis);
            GeneratePresignedUrlRequest generatePresignedUrlRequest = new GeneratePresignedUrlRequest(awsConfig.getBucket(), objectKey)
                    .withMethod(HttpMethod.GET)
                    .withExpiration(expiration);
            URL url = s3Client.generatePresignedUrl(generatePresignedUrlRequest);
            downloadUrls.put(objectKey, url.toString());
            return url.toString();
        } catch (AmazonServiceException e) {
            e.printStackTrace();
        } catch (SdkClientException e) {
            e.printStackTrace();
        }
        return "";
    }

}
