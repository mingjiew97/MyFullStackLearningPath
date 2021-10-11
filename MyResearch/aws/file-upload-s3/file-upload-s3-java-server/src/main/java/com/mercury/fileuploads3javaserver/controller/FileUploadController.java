package com.mercury.fileuploads3javaserver.controller;

import com.mercury.fileuploads3javaserver.controller.dto.FileDTO;
import com.mercury.fileuploads3javaserver.service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/file-upload")
public class FileUploadController {

    @Autowired
    FileUploadService fileUploadService;

    @GetMapping("/singedUrls")
    public FileDTO upload(@RequestParam(name = "fileName") String fileName,
                                @RequestParam(name = "useSignedUrlForGet", required = false) boolean useSignedUrlForDownload) {
        return fileUploadService.getSignedUrl(fileName, useSignedUrlForDownload);
    }

}
