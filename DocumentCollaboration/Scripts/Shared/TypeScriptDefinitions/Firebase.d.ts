// Type definitions for Firebase

interface Firebase {
    new (url: string): FirebaseItem;
}

interface FirebaseItem {

    auth(authToken, onComplete?: (error: Object, auth: FirebaseAuth) => void , onCancel?: (error: Object) => void ): void;
    unauth(): void;

    child(childPath: string): FirebaseItem;
    parent(): FirebaseItem;

    name(): string;

    toString(): string;

    set (value: string, onComplete?: (error: Object) => void );
    set (value: bool, onComplete?: (error: Object) => void );
    set (value: number, onComplete?: (error: Object) => void );
    set (object: Object, onComplete?: (error: Object) => void );

    update(value: Object, onComplete?: (error: Object) => void );

    remove(onComplete?: (error: Object) => void );

    push(value?: string, onComplete?: (error: Object) => void );
    push(value?: bool, onComplete?: (error: Object) => void );
    push(value?: number, onComplete?: (error: Object) => void );
    push(value?: Object, onComplete?: (error: Object) => void );

    setWithPriority(value: Object, priority: string, onComplete?: (error: Object) => void );
    setWithPriority(value: Object, priority: number, onComplete?: (error: Object) => void );

    setPriority(priority: string, onComplete?: (error: Object) => void );
    setPriority(priority: number, onComplete?: (error: Object) => void );

    transaction(updateFunction: (currentData: any) => any, onComplete?: (error: Object, committed: bool, snapshot: FirebaseSnapshot) => void );

    on(eventType: string, callback: (snapshot: FirebaseSnapshot) => void , cancelCallback?: (snapshot: FirebaseSnapshot) => void , context?: Object);
    off(eventType?: string, callback?: (snapshot: FirebaseSnapshot) => void , context?: Object);
    once(eventType: string, successCallback: (snapshot: FirebaseSnapshot) => void , failureCallback?: (snapshot: FirebaseSnapshot) => void , context?: Object);

    startAt(priority: any, name: string): FirebaseItem;
    endAtAt(priority: any, name: string): FirebaseItem;
    limit(limit: number): FirebaseItem;
}

interface FirebaseSnapshot {
    val(): string;
    val(): bool;
    val(): number;
    val():Object;
}

interface FirebaseAuth {
    auth: Object;
    expires: Date;
}

declare var Firebase: Firebase;