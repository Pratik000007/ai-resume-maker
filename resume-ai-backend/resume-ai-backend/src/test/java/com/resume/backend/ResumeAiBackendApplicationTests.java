package com.resume.backend;

import com.resume.backend.service.ResumeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class ResumeAiBackendApplicationTests {

    @Autowired
    private ResumeService resumeService;

    @Test
    void contextLoads() throws IOException {

        resumeService.generateResumeResponse("I am Pratik Mendhe with 2 year of java exp .");

    }

}
