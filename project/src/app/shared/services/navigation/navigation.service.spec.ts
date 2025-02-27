import { TestBed } from '@angular/core/testing';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import '../../extensions/string-extensions';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;
  let router: Router;
  let eventsSubject: BehaviorSubject<
    Event | NavigationStart | NavigationEnd | NavigationError | null
  >;

  beforeEach(() => {
    eventsSubject = new BehaviorSubject<
      Event | NavigationStart | NavigationEnd | NavigationError | null
    >(null);
    router = {
      events: eventsSubject.asObservable(),
    } as any;

    TestBed.configureTestingModule({
      providers: [NavigationService, { provide: Router, useValue: router }],
    });

    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set loading to true on NavigationStart', () => {
    eventsSubject.next(new NavigationStart(1, '/test'));
    expect(service.loading()).toBe(true);
  });

  it('should set loading to false on NavigationError', () => {
    eventsSubject.next(new NavigationError(1, '/test', 'error'));
    expect(service.loading()).toBe(false);
  });

  it('should set loading to false and update context on NavigationEnd', () => {
    eventsSubject.next(new NavigationEnd(1, '/test', '/test'));
    expect(service.loading()).toBe(false);
    service.urlObservable.subscribe((context) => {
      expect(context.fullUrl).toBe('/test');
      expect(context.path).toEqual(['home', 'test']);
    });
  });

  it('should return correct context path', () => {
    expect(service['getContextPath']('/home')).toEqual(['home']);
    expect(service['getContextPath']('/test')).toEqual(['home', 'test']);
  });

  it('should convert empty path to /home', () => {
    expect(service['getContextPath']('')).toContain('home');
  });
});
