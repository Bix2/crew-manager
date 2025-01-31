<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Crew Manager</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="https://fonts.googleapis.com/css?family=Chivo|Poppins:400,500" rel="stylesheet">
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>

        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
