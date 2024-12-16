# 简介
哈密是一款帮助用户自动生成密码的开源软件。用户只需要记住一个密码，即可为不同的网站生成密码。  
哈密通过**记忆密码**（HMAC的Key）+**区分代号**（HMAC的Message）计算生成密码。
1. 基于[HMAC-MD5](https://en.wikipedia.org/wiki/HMAC)，前端实时计算，无需后台储存，更加安全。
2. 提供跨平台支持，包括`Mac`, `Windows`, `iOS`, `Android`, `Chrome`等


# 建议
1. **记忆密码**设置不要太过简单，比如`123456`，不要使用个人信息，比如生日、手机号等等。防止被社工或者弱口令破解。
2. **区分代号**可以自行混淆，比如为`QQ`生成密码，可以将区别代号设置为`QQ123`。


# 参考
1. [花密](https://flowerpassword.com/)
2. [kenmick/花密](https://github.com/kenmick/FlowerPassword/tree/master)
3. [Crypto-JS Library](https://cdnjs.com/libraries/crypto-js)
