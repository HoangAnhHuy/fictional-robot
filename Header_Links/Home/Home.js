// Hàm để tải nội dung của tệp CSS và trích xuất các thuộc tính :root
function extractRootProperties(url, callback) {
    // Sử dụng XMLHttpRequest để tải tệp tin CSS
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Khi tải thành công, phân tích nội dung để lấy các thuộc tính :root
            var cssContent = xhr.responseText;
            var parser = new DOMParser();
            var cssDoc = parser.parseFromString(cssContent, 'text/css');
            var rootProperties = {};

            // Lấy các thuộc tính :root
            var rootStyle = cssDoc.querySelector(':root');
            var rootStyles = rootStyle.style;
            for (var i = 0; i < rootStyles.length; i++) {
                var propertyName = rootStyles[i];
                var propertyValue = rootStyle.style.getPropertyValue(propertyName);
                rootProperties[propertyName] = propertyValue;
            }

            // Gọi callback với các thuộc tính :root đã trích xuất
            callback(rootProperties);
        }
    };
    xhr.send();
}

// Sử dụng hàm extractRootProperties để lấy các thuộc tính :root từ tệp CSS
extractRootProperties('/style.css', function(rootProperties) {
    console.log(rootProperties);
    // Thực hiện các công việc khác với các thuộc tính :root ở đây
});
