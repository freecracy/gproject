1. wue static 路径问题
   ```javascript
	// config/index.js
        // assetsPublicPath 修改为相对路径
        module.exports = {
            build: {
    	        assetsPublicPath: './',
                assetsSubDirectory: 'static'
  	    }
        }
   ```

2. Makefile 
   *** missing separator.  Stop.
   ```bash
   # Makefile 已tab区分命令开始
   echo autocmd FileType make set noexpandtab >> .vimrc
   ```

3. Dockerfile
   standard_init_linux.go:211: exec user process caused "no such file or directory"
   缺少依赖项*.so.*
