mobiletto-cli
 =============
 Giao diện dòng lệnh (CLI) cho [mobiletto](https://www.npmjs.com/package/mobiletto)
 kho.

 Mobiletto hỗ trợ kết nối với Amazon S3, Backblaze B2 và các hệ thống tệp cục bộ.

 # Đọc sách này bằng ngôn ngữ khác
 Tài liệu README.md này đã được dịch, qua [hokeyption](https://github.com/cobbzilla/hokeyption), sang
 ** [mọi ngôn ngữ được Google Dịch hỗ trợ](https://cloud.google.com/translate/docs/languages)! **

 Tôi chắc chắn rằng nó không hoàn hảo, nhưng tôi hy vọng nó còn hơn không!

 [🇸🇦 tiếng Ả Rập](docs / ar / README.md)
 [🇧🇩 Tiếng Bengali](docs / bn / README.md)
 [🇩🇪 tiếng Đức](docs / de / README.md)
 [🇺🇸 Tiếng Anh](docs / en / README.md)
 [🇪🇸 Tiếng Tây Ban Nha](docs / es / README.md)
 [🇫🇷 Tiếng Pháp](docs / fr / README.md)
 [🇹🇩 Hausa](docs / ha / README.md)
 [🇮🇳 Hindi](docs / hi / README.md)
 [🇮🇩 tiếng Indonesia](docs / id / README.md)
 [🇮🇹 Tiếng Ý](docs / it / README.md)
 [🇯🇵 Tiếng Nhật](docs / ja / README.md)
 [🇰🇷 Tiếng Hàn](docs / ko / README.md)
 [🇮🇳 Marathi](docs / mr / README.md)
 [🇵🇱 Tiếng Ba Lan](docs / pl / README.md)
 [🇧🇷 tiếng Bồ Đào Nha](docs / pt / README.md)
 [🇷🇺 tiếng Nga](docs / ru / README.md)
 [🇰🇪 Swahili](docs / sw / README.md)
 [🇵🇭 Tagalog](docs / tl / README.md)
 [🇹🇷 tiếng Thổ Nhĩ Kỳ](docs / tr / README.md)
 [🇵🇰 Urdu](docs / ur / README.md)
 [🇻🇳 Tiếng Việt](docs / vi / README.md)
 [🇨🇳 Tiếng Trung](docs / zh / README.md)


 ** [📚 ... Tất cả ngôn ngữ ...](docs / README.md) **
 ----

 ### Có sự cố với bản dịch README này không?
 Bản dịch cụ thể này của bản gốc [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 có thể có sai sót - * rất hoan nghênh việc sửa chữa! * Vui lòng gửi [yêu cầu kéo trên GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 hoặc nếu bạn không thoải mái khi làm điều đó, hãy [mở sự cố](https://github.com/cobbzilla/mobiletto-cli/issues)

 Khi bạn tạo một vấn đề GitHub mới về bản dịch, vui lòng thực hiện:
 * bao gồm URL của trang (sao chép / dán từ thanh địa chỉ trình duyệt)
 * bao gồm văn bản chính xác bị sai (sao chép / dán từ trình duyệt)
 * vui lòng mô tả những gì là sai - bản dịch không chính xác? định dạng có bị hỏng bằng cách nào đó không?
 * vui lòng đưa ra gợi ý về bản dịch tốt hơn hoặc cách văn bản phải được định dạng đúng
 * **Cảm ơn bạn!**

 # Nội dung
 * [Nguồn](# Nguồn)
 * [Hỗ trợ và Tài trợ](# Hỗ trợ và Tài trợ)
 * [Cài đặt và sử dụng](# Cài đặt và sử dụng)
 * [gói npm](# gói-npm)
 * [Từ nguồn](# Từ nguồn)
 * [Kết nối](# Kết nối)
 * [Tạo kết nối](# Tạo kết nối)
 * [Danh sách kết nối](# Danh sách kết nối)
 * [Dump kết nối JSON config](# Dump-connection-JSON-config)
 * [Xóa kết nối](# Xóa kết nối)
 * [Xóa tất cả các kết nối](# Xóa tất cả các kết nối)
 * [Làm việc với bộ nhớ](# Làm việc với bộ nhớ)
 * [Tệp danh sách](# Tệp danh sách)
 * [Ghi tệp vào stdout](# Write-a-file-to-stdout)
 * [Sao chép tệp](# Sao chép tệp)
 * [Xóa tệp](# Xóa tệp)
 * [Xem siêu dữ liệu](# Siêu dữ liệu xem)
 * [Thư mục Mirror](# Thư mục Mirror)

 ### Nguồn
 * [mobiletto-cli trên GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli trên npm](https://www.npmjs.com/package/mobiletto-cli)

 ## Hỗ trợ và Tài trợ
 Tôi đang cố gắng trở thành một nhà phát triển phần mềm nguồn mở chuyên nghiệp. Tôi đã làm việc ở
 ngành công nghiệp phần mềm trong nhiều năm, tôi đã thành lập các công ty thành công và bán chúng cho các công ty đại chúng.
 Gần đây, tôi bị mất việc và tôi không thực sự có bất kỳ công việc nào khác.

 Vì vậy, tôi sẽ thử viết phần mềm hữu ích và xem nó có hoạt động không

 Nếu bạn thích sử dụng phần mềm này, tôi sẽ chân thành biết ơn vì
 nhỏ nhất [đóng góp hàng tháng qua Patreon](https://www.patreon.com/cobbzilla)

 *Cảm ơn bạn!*

 ## Cài đặt và sử dụng
 Bạn có thể cài đặt và chạy `mobiletto-cli` qua npm hoặc trực tiếp từ nguồn.

 ### gói npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### Từ nguồn
 Để chạy từ nguồn, bạn sẽ cần nodejs v16 + và sợi

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## Kết nối
 Tất cả bộ nhớ mobiletto đều được truy cập thông qua một kết nối.

 Mobiletto hiện hỗ trợ kết nối với bộ lưu trữ hệ thống tệp cục bộ và bộ chứa Amazon S3.

 Các kết nối được chỉ định bởi một đối tượng JSON trông giống như sau:

    {
        "name": "name-of-connection",
        "type": "s3", # one of "s3", "b2", or "local"
        "opts": {
            "readOnly": false, # optional, default false
            "cacheSize": 100, # optional,
            ... other type-specific options ...
        },
        "encryption": { # optional, default is no encryption
            "key": "enc-key", # required if encryption is enabled
            "iv": "enc-IV", # optional, derived from key if omitted
            "algo": "enc-algo" # optional, default is aes-256-cbc
        }
    }

 Để biết chi tiết đầy đủ về tất cả các tùy chọn cũng như giá trị và ý nghĩa của chúng, hãy xem
 [mobiletto docs](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### Tạo kết nối
 Để tạo một kết nối mới, chúng ta cần một trong các đối tượng JSON này.

 Chúng tôi có thể tạo một cái tương tác hoặc cung cấp một cái thông qua tệp hoặc theo nghĩa đen JSON:

    # Create JSON via interactive prompts
    mo connect

    # Create via interactive prompts, but force name `my-conn` to be used
    mo connect -c my-conn
    mo connect --create my-conn # long-form option

    # Create from JSON config
    mo connect my-conn.json

    # Create from JSON config, but force name `renamed` to be used
    mo connect -c renamed my-conn.json

    # Create from literal JSON object
    mo connect '{
        "name": "my-conn",
        "type": "local",
        "key": "/tmp/basedir"
    }'

 ### Liệt kê các kết nối
 Liệt kê các kết nối khả dụng:

    mo connect -l
    mo connect --list

 ### Dump kết nối cấu hình JSON
 Hiển thị cấu hình JSON đầy đủ cho một kết nối. ** CẢNH BÁO ** điều này sẽ in các khóa và bí mật vào stdout.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### Xóa kết nối
 Xóa một kết nối duy nhất:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### Xóa tất cả các kết nối
 Xóa TẤT CẢ các kết nối:

    mo connect -R
    mo connect --remove-all

 ## Làm việc với bộ nhớ
 Khi bạn đã tạo một số kết nối, hãy sử dụng các thao tác `ls` , `cp` , `rm` , `meta` và `mirror`
 để làm việc với họ.

 Mọi đường dẫn tệp mà bạn cung cấp cho một lệnh phải có tiền tố là tên của kết nối
 nó đề cập đến. Trong các ví dụ dưới đây, chúng tôi giả sử tồn tại hai kết nối có tên là `conn1` `conn2`

 ### Liệt kê tệp
 Đầu ra của lệnh danh sách là một loạt các đối tượng JSON, một đối tượng trên mỗi dòng, đại diện cho các tệp
 tìm. Các đối tượng này sẽ có `name` `type` , và có thể là các trường khác.

    mo ls conn1/some/path

 Liệt kê các tệp một cách đệ quy:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 ** Lưu ý lưu trữ được mã hóa **: Danh sách đệ quy chưa được hỗ trợ cho các kết nối được mã hóa.
 Bạn chỉ có thể liệt kê một thư mục tệp tại một thời điểm.

 Liệt kê các tệp một cách chi tiết (JSON in đẹp):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 Liệt kê các tệp một cách đệ quy và chi tiết:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 Xem trợ giúp cho lệnh `ls` , mô tả tất cả các tùy chọn:

    mo ls -h
    mo ls --help

 ### Ghi tệp vào stdout
 Lệnh `cat` sẽ in một tệp ra stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 Theo tinh thần UNIX thực sự * (nhưng chắc chắn không phải là thông lệ!) * Lệnh `cat` của mobiletto ** không có tùy chọn nào **
 khác với `-h` / `--help` để hiển thị thông tin hữu ích.

 ### Sao chép tệp
 Sao chép một tệp từ mobiletto này sang mobiletto khác:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 Sao chép một tệp đơn từ mobiletto này sang mobiletto khác, đổi tên nó tại điểm đến:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 Sao chép đệ quy một thư mục:

    mo cp -r conn1/some/directory conn2/some/dest/

 Xem trợ giúp cho lệnh `cp` , mô tả tất cả các tùy chọn:

    mo cp -h
    mo cp --help

 Lưu ý: Việc sao chép tệp không nhanh lắm, vì nó hiện yêu cầu tệp tạm thời trung gian.

 ### Xóa các tập tin
 Xóa một tệp duy nhất:

    mo rm conn1/some/file.txt

 Xóa một tệp duy nhất và không phàn nàn về bất kỳ lỗi nào:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 Xóa thư mục:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 Xóa thư mục và không phàn nàn về bất kỳ lỗi nào:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### Xem siêu dữ liệu
 Thông thường, việc biết siêu dữ liệu của tệp mà không cần tải xuống toàn bộ tệp thường rất hữu ích.

 Mobiletto có thể báo cáo kích thước tệp và thời gian sửa đổi lần cuối, ngoài tên và loại.

 Để xem siêu dữ liệu:

    mo meta conn1/some/file.txt

 ### Thư mục gương
 Phản chiếu không chỉ là một trường hợp đặc biệt của `cp` , nó là một lệnh mobiletto riêng biệt bao bọc
 thao tác sao chép; nó tiếp tục ngay cả khi lỗi xảy ra và theo dõi số lượng thành công và lỗi.

 Để phản chiếu mọi thứ từ conn1 thành conn2:

    mo mirror conn1 conn2

 Để phản chiếu một thư mục con:

    mo mirror conn1/some/subdir conn2

 Để sao chép một thư mục con vào một thư mục con khác:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
