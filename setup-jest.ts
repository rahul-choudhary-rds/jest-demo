import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

setupZoneTestEnv();
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());