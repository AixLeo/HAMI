// 定义全局变量
let textView = '';
let maskView = '';

function generateHash() {
    // 获取输入值
    const memoryPassword = document.getElementById('memoryPassword').value.trim();
    const identifierCode = document.getElementById('identifierCode').value.trim();


    // 如果任一输入为空，隐藏结果容器
    if (!memoryPassword || !identifierCode) {
        resultContainer.classList.add('hidden');
        textView = '';
        return;
    }

    // 显示结果容器
    resultContainer.classList.remove('hidden');

    // 使用 CryptoJS.HmacMD5 生成哈希值
    const hash = CryptoJS.HmacMD5(memoryPassword, identifierCode);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(hash));
    textView = hashInBase64.substring(hashInBase64.length - 16);
    maskView = maskResult(textView);

    // 将结果填入结果框
    document.getElementById('result').value = maskView;
}

function maskResult(hash) {
    // 显示前3位和后3位，中间用********隐藏
    if (hash.length > 12) {
        return hash.substring(0, 3) + '********' + hash.substring(hash.length - 3);
    }
    return hash;
}

function copyToClipboard() {
    if (!textView) {
        alert('没有可复制的内容！');
        return;
    }

    navigator.clipboard.writeText(textView)
        .then(() => alert('已复制原始结果到剪贴板'))
        .catch(() => alert('复制失败，请手动复制'));
}


function toggleVisibility() {
    const resultInput = document.getElementById('result');
    const toggleButton = document.querySelector('.toggle-visibility');
    if (resultInput.value === maskView) {
        // 显示原始结果
        resultInput.value = textView;
        toggleButton.textContent = '🙈';
    } else {
        // 恢复遮掩后的结果
        resultInput.value = maskView;
        toggleButton.textContent = '👁';
    }
}