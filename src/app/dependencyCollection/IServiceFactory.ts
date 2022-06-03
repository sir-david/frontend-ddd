import { Component } from "@angular/core";

export interface IServiceFactory {
    GetLocalizedService():IService;
}

export interface IService{} 