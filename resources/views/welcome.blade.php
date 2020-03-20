<!DOCTYPE html>
<html lang="en">
<head>
    <title>title</title>
    <meta id="csrf" content="{{csrf_token()}}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>

<div class="container" id="app">
    <div class="row">
        <example-component></example-component>
    </div>
</div>

<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
