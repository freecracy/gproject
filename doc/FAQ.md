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
