import { OnInit } from '@angular/core';
import * as io from 'socket.io-client';

export class socketcomm implements OnInit{
    private socket = io("http://localhost:6969");
    
    ngOnInit(){

    }
}