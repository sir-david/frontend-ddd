import { Component } from "@angular/core";

export interface IComponentFactory {
    GetLocalizedComponent():IComponent;
}

export interface IComponent{} 