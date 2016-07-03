/**
 * External imports
 */
import { Injectable } from '@angular/core';

/**
 * Notifier timer service (TODO)
 */
@Injectable()
export class NotifierTimerService {

	/**
	 * Time at this moment
	 */
	private now: number;

	/**
	 * Remaining timer countdown
	 */
	private remaining: number;

	/**
	 * Timer ID (timeout token)
	 */
	private timerId: number;

	/**
	 * Constructor
	 */
	constructor() {
		this.now = 0;
		this.remaining = 0;
		this.timerId = null;
	}

	/**
	 * Run (start / resume) the timer
	 * @param {number}   duration Duration
	 * @param {Function} callback Callback function
	 */
	public run( duration: number, callback: Function ): void {
		if ( this.remaining === 0 ) {
			this.remaining = duration;
		}
		this.now = new Date().getTime();
		this.timerId = setTimeout( callback, this.remaining );
	}

	/**
	 * Stop the timer (like ... forever ...)
	 */
	public stop(): void {
		clearTimeout( this.timerId );
		this.remaining = 0;
	}

	/**
	 * Pause the timer
	 */
	public pause(): void {
		clearTimeout( this.timerId );
		this.remaining -= new Date().getTime() - this.now;
	}

}
