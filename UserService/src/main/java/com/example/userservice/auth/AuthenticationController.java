package com.example.userservice.auth;

import com.example.userservice.user.User;
import com.example.userservice.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthenticationController {
    @Autowired
    private final AuthenticationService service;
    @Autowired
    private final UserService userService;

    @PostMapping("auth/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }
    @PostMapping("auth/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/user/userInfo")
    public User getItems() {
        return userService.getCurrentUser();
    }

    @PostMapping("/user/saveUser")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
