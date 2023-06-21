document.addEventListener('DOMContentLoaded', (event) => {
const joinButton = document.getElementById('join-button');
    const loginButton = document.getElementById('login-button');
    const toHomePage = document.getElementById('toHomePage');
    const toSearchPage = document.getElementById('toSearchPage');
    const toUserPage = document.getElementById('toUserPage');
    const toUserProfile = document.getElementById('toUserProfile');
    const toRoomSelect = document.getElementById('toRoomSelect');
    const toRoomCreate = document.getElementById('toRoomCreate');
    const toMessagePage = document.getElementById('toMessagePage');
    const toGamePage = document.getElementById('toGamePage');
    const toGameScores = document.getElementById('toGameScores');

    if (joinButton) {
        joinButton.addEventListener('click', function (event) {
            window.location.href = "/join";
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', function (event) {
            window.location.href = "/login";
        });
    }

    if (toHomePage) {
        toHomePage.addEventListener('click', function (event) {
            window.location.href = "/homePage";
        });
    }

    if (toSearchPage) {
        toSearchPage.addEventListener('click', function (event) {
            window.location.href = "/userSearch";
        });
    }

    if (toUserPage) {
        toUserPage.addEventListener('click', function (event) {
            window.location.href = "/user";
        });
    }

    if (toUserProfile) {
        toUserProfile.addEventListener('click', function (event) {
            window.location.href = "/viewUser";
        });
    }

    if (toRoomSelect) {
        toRoomSelect.addEventListener('click', function (event) {
            window.location.href = "/roomSelection";
        });
    }

    if (toRoomCreate) {
        toRoomCreate.addEventListener('click', function (event) {
            window.location.href = "/roomCreation";
        });
    }

    if (toMessagePage) {
        toMessagePage.addEventListener('click', function (event) {
            window.location.href = "/messagePage";
        });
    }

    if (toGamePage) {
        toGamePage.addEventListener('click', function (event) {
            window.location.href = "/gameChoice";
        });
    }

    if (toGameScores) {
        toGameScores.addEventListener('click', function (event) {
            window.location.href = "/gameScores";
        });
    }
});
