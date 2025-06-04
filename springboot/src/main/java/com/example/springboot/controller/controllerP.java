package com.example.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class controllerP {
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @GetMapping(value="/gogoUrl")
    public String gogoUrlController() {
        log.info("^^");
        return "indext.html";
    }
}
