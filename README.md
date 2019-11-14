# Web Application with Plugin Base Architecture
This web application is developed based on plugin based architecture. Core system can not be modified while plungin can add new functionalities to the system. This system developed on SOLID principle
* S - Single Responsibility Principle
* O - Open-Close Principle
* L - Liskov Substitution Principle
* I - Interface Segregation Principle
* D - Dependency Inversion Principle

## Core System
Core system will be devided in the following section
* TopBar Component
* LeftBar Component
* BottomBar Component
* Content area

> This system support left-to-right layouting as of now.

### Admin Section
Core system is shipped with adimin section where It list all the available plugin


## Useful notes
* Interfaces are there to stablish protocol between core and plugin.
* There are plugin registeries for TopBar, LeftBar, BottomBar and Home content Area
* Plugin registery pick up plugin from JSON and freez the registery immidiatly which means dynamic plugin can not be added the system.


## References:

* [Plugin architecture example with full TypeScript support](https://github.com/gr2m/javascript-plugin-architecture-with-typescript-definitions)

* [stackoverflow: how-to-create-a-flexible-plug-in-architecture](https://stackoverflow.com/questions/2768104/how-to-create-a-flexible-plug-in-architecture)

* [Javascript Plugin Architecture on YouTube](https://www.youtube.com/watch?v=guplzeeOxdo)
[purplemagma](https://github.com/purplemagma/starter-plugin)

* EasyXDM code for cross domain communication (JS RPC)

```javascript
//plugin json references...

"attachPoint": {
    "accessPoint": "_appSettingsSettingList",
    "linkText": "My Plugin",
    "plunginId": "MyPlugin",
    "baseSourceUrl": "https://local.com",
    "sourcePath":"/index.html"
}

{
    "allowedOrigin": ['*'],
    "subscribedEvents": ["core-event1"],
    "sourcePath": "/index.html",
    "accessPoint": [
        {
            "overrideAppRoute": "customer"
        },
        {
            "attachPoint": "_appSettingsSettingList",
            "linkText": "My Plugin",
        }
    ]
}

```
