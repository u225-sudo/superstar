document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('boy1');
    var images = ['哒哒哒.jpg', '天动万象.jpg']; // 图片路径数组
    var currentIndex = 0;

    image.addEventListener('click', function()
     {
       if (currentIndex < images.length - 1) {
            currentIndex++;
       }
       else {
            currentIndex = 0;
       }
       image.src = images[currentIndex];
    });
});
document.getElementById('changeUsernameBtn').addEventListener('click', function() {
            var newUsername = prompt('请输入新用户名：');
            if (newUsername) {
                document.getElementById('username').textContent =newUsername;
            }
        });5