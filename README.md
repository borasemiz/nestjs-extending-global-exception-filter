# Intro

The purpose of this repo is to show what is not working when trying to extend global exception filter that comes out of the box and use it as the global exception filter.

There is an unhandled exception thrown in `src > app.controller.ts`, `AppController.getHello()` method.

This exception is caught by global exception filter that comes out of the box and a generic 500 error response is returned to as a response.

When I try to extend this exception filter, as in `master` branch `src > main.ts`, the exception is not caught and the error response doesn't sent back.

`master` branch contains the version that suppose to work but not.

`working` branch doesn't set ant global exception filters. It works as expected.