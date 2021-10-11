package com.mercury.fileuploads3javaserver.controller.dto;

public class FileDTO {

    private String file;
    private String uploadUrl;
    private String downloadUrl;

    public FileDTO() {
    }

    public FileDTO(String file, String uploadUrl, String downloadUrl) {
        this.file = file;
        this.uploadUrl = uploadUrl;
        this.downloadUrl = downloadUrl;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getUploadUrl() {
        return uploadUrl;
    }

    public void setUploadUrl(String uploadUrl) {
        this.uploadUrl = uploadUrl;
    }

    public String getDownloadUrl() {
        return downloadUrl;
    }

    public void setDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
    }
}
