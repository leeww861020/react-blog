/**
 * Created by wonwoo on 2016. 1. 18..
 */


import Dispatcher from '../core/Dispatcher';
var socket = io.connect();

import Chat from './Chat';
Chat(socket, Dispatcher);
