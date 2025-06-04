package com.example.helloworld.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {

    @GetMapping("/test")
    public String test() {
        return "Hello World";
    }
}
// 컨트롤러에서 버튼에 따른 페이지 이동 기능 구현하면 될 것 같음