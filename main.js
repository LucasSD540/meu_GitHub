document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name');
    const login = document.getElementById('user_name');
    const public_repos = document.getElementById('repository');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const html_url = document.getElementById('html_url');
    const avatar_url = document.getElementById('avatar_url');

    fetch('https://api.github.com/users/LucasSD540')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            name.innerHTML = json.name;
            login.innerHTML = json.login;
            public_repos.innerHTML = json.public_repos;
            followers.innerHTML = json.followers;
            following.innerHTML = json.following;
            html_url.href = json.html_url;
            avatar_url.src = json.avatar_url;
        })
})
