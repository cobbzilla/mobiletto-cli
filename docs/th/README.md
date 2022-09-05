mobiletto-cli
 ==============
 อินเทอร์เฟซบรรทัดคำสั่ง (CLI) สำหรับ [mobiletto](https://www.npmjs.com/package/mobiletto)
 พื้นที่จัดเก็บ.

 Mobiletto รองรับการเชื่อมต่อกับ Amazon S3, Backblaze B2 และระบบไฟล์ในเครื่อง

 #อ่านเป็นภาษาอื่น
 เอกสาร README.md นี้ได้รับการแปลผ่าน [ `hokeylization` ](https://github.com/cobbzilla/hokeylization) ลงใน
 **[ทุกภาษาที่ Google Translate รองรับ](https://cloud.google.com/translate/docs/languages)!**

 ฉันแน่ใจว่ามันไม่สมบูรณ์แบบ แต่ฉันหวังว่าจะดีกว่าไม่ทำอะไรเลย!

 [🇸🇦 ภาษาอาหรับ](../ar/README.md)
 [🇧🇩 เบงกาลี](../bn/README.md)
 [🇩🇪 ภาษาเยอรมัน](../de/README.md)
 [🇺🇸 ภาษาอังกฤษ](../th/README.md)
 [🇪🇸 ภาษาสเปน](../es/README.md)
 [🇫🇷 ภาษาฝรั่งเศส](../fr/README.md)
 [🇹🇩 เฮาซา](../ha/README.md)
 [🇮🇳 ภาษาฮินดี](../hi/README.md)
 [🇮🇩 ภาษาชาวอินโดนีเซีย](../id/README.md)
 [🇮🇹 ภาษาอิตาลี](../it/README.md)
 [🇯🇵 ภาษาญี่ปุ่น](../ja/README.md)
 [🇰🇷 ภาษาเกาหลี](../ko/README.md)
 [🇮🇳 มารันตี](../mr/README.md)
 [🇵🇱 โปแลนด์](../pl/README.md)
 [🇧🇷 ภาษาโปรตุเกส](../pt/README.md)
 [🇷🇺 ภาษารัสเซีย](../ru/README.md)
 [🇰🇪 สวาฮีลี](../sw/README.md)
 [🇵🇭 ภาษาตากาล็อก](../tl/README.md)
 [🇹🇷 ภาษาตุรกี](../tr/README.md)
 [🇵🇰 ภาษาอูรดู](../ur/README.md)
 [🇻🇳 ภาษาเวียดนาม](../vi/README.md)
 [🇨🇳 ภาษาจีน](../zh/README.md)


 **[📚 ...ทุกภาษา ...](../README.md)**
 ----

 ### มีปัญหากับการแปล README นี้หรือไม่?
 การแปลเฉพาะของต้นฉบับ [README](https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 อาจมีข้อบกพร่อง -- * ยินดีเป็นอย่างยิ่งที่จะแก้ไข! * โปรดส่ง [pull request บน GitHub](https://github.com/cobbzilla/mobiletto-cli/pulls),
 หรือหากคุณไม่สะดวกใจที่จะทำเช่นนั้น [เปิดปัญหา](https://github.com/cobbzilla/mobiletto-cli/issues)

 เมื่อคุณสร้างปัญหา GitHub ใหม่เกี่ยวกับการแปล โปรดทำดังนี้
 * รวม URL ของหน้า (คัดลอก/วางจากแถบที่อยู่ของเบราว์เซอร์)
 * รวมข้อความที่ไม่ถูกต้อง (คัดลอก/วางจากเบราว์เซอร์)
 * โปรดอธิบายสิ่งที่ผิด -- การแปลไม่ถูกต้องหรือไม่? การจัดรูปแบบเสียอย่างใด?
 *กรุณาเสนอคำแนะนำในการแปลที่ดีขึ้น หรือควรจัดรูปแบบข้อความอย่างไรให้เหมาะสม
 * **ขอขอบคุณ!**

 ### แหล่งที่มา
 * [mobiletto-cli บน GitHub](https://github.com/cobbzilla/mobiletto-cli)
 * [mobiletto-cli บน npm](https://www.npmjs.com/package/mobiletto-cli)

 # เนื้อหา
 * [การติดตั้งและการใช้งาน](#การติดตั้งและการใช้งาน)
 * [แพ็คเกจ NPM](#npm-แพ็คเกจ)
 * [จากแหล่งที่มา](#จากแหล่งที่มา)
 * [การเชื่อมต่อ](#การเชื่อมต่อ)
 * [สร้างการเชื่อมต่อ](#สร้างการเชื่อมต่อ)
 * [รายการการเชื่อมต่อ](#List-การเชื่อมต่อ)
 * [ดัมพ์การเชื่อมต่อ JSON config](#Dump-connection-JSON-config)
 * [ลบการเชื่อมต่อ](#Remove-a-connection)
 * [ลบการเชื่อมต่อทั้งหมด](#Remove-all-connections)
 * [การทำงานกับที่เก็บข้อมูล](#การทำงานกับที่เก็บข้อมูล)
 * [รายการไฟล์](#List-files)
 * [เขียนไฟล์ไปที่ stdout](#Write-a-file-to-stdout)
 * [คัดลอกไฟล์](#Copy-files)
 * [ลบไฟล์](#Delete-files)
 * [ดูข้อมูลเมตา](#ดู-ข้อมูลเมตา)
 * [ไดเรกทอรีกระจกเงา](#ไดเรกทอรีกระจกเงา)

 ## การติดตั้งและการใช้งาน
 คุณสามารถติดตั้งและเรียกใช้ `mobiletto-cli` ผ่าน npm หรือโดยตรงจากแหล่งที่มา

 ### แพ็คเกจ npm
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### จากแหล่งที่มา
 หากต้องการเรียกใช้จากซอร์ส คุณจะต้องมี nodejs v16+ และ yarn

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## การเชื่อมต่อ
 ที่เก็บข้อมูล mobiletto ทั้งหมดสามารถเข้าถึงได้ผ่านการเชื่อมต่อ

 ปัจจุบัน Mobiletto รองรับการเชื่อมต่อกับพื้นที่จัดเก็บระบบไฟล์ในเครื่องและบัคเก็ต Amazon S3

 การเชื่อมต่อถูกระบุโดยวัตถุ JSON ที่มีลักษณะดังนี้:

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

 สำหรับรายละเอียดทั้งหมดเกี่ยวกับตัวเลือกทั้งหมด รวมถึงค่านิยมและความหมาย โปรดดูที่
 [เอกสารเคลื่อนที่](https://www.npmjs.com/package/mobiletto#Basic-usage)

 ### สร้างการเชื่อมต่อ
 ในการสร้างการเชื่อมต่อใหม่ เราต้องการหนึ่งในวัตถุ JSON เหล่านี้

 เราสามารถสร้างแบบโต้ตอบหรือจัดหาผ่านทางไฟล์หรือตามตัวอักษร JSON:

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

 ### รายการการเชื่อมต่อ
 แสดงรายการการเชื่อมต่อที่ใช้ได้:

    mo connect -l
    mo connect --list

 ### การถ่ายโอนข้อมูลการเชื่อมต่อ JSON config
 แสดงการกำหนดค่า JSON แบบเต็มสำหรับการเชื่อมต่อ **คำเตือน** การดำเนินการนี้จะพิมพ์คีย์และข้อมูลลับไปยัง stdout

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### ลบการเชื่อมต่อ
 ลบการเชื่อมต่อเดียว:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### ลบการเชื่อมต่อทั้งหมด
 ลบการเชื่อมต่อทั้งหมด:

    mo connect -R
    mo connect --remove-all

 ## การทำงานกับการจัดเก็บ
 เมื่อคุณสร้างการเชื่อมต่อแล้ว ให้ใช้การดำเนินการ `ls` , `cp` , `rm` , `meta` และ `mirror`
 เพื่อทำงานกับพวกเขา

 ทุกเส้นทางของไฟล์ที่คุณระบุไปยังคำสั่งต้องขึ้นต้นด้วยชื่อการเชื่อมต่อ
 มันหมายถึง ในตัวอย่างด้านล่าง เราถือว่ามีการเชื่อมต่อสองรายการชื่อ `conn1` และ `conn2`

 ### รายการไฟล์
 ผลลัพธ์ของคำสั่ง list คือชุดของอ็อบเจ็กต์ JSON หนึ่งรายการต่อบรรทัด แทนไฟล์
 พบ. ออบเจ็กต์เหล่านี้จะมี `name` และ `type` และอาจมีฟิลด์อื่นๆ

    mo ls conn1/some/path

 แสดงรายการไฟล์แบบเรียกซ้ำ:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **หมายเหตุการจัดเก็บที่เข้ารหัส**: ยังไม่รองรับรายการแบบเรียกซ้ำสำหรับการเชื่อมต่อที่เข้ารหัส
 คุณสามารถแสดงรายการไฟล์ได้ครั้งละหนึ่งไดเร็กทอรีเท่านั้น

 แสดงรายการไฟล์อย่างละเอียด (JSON พิมพ์สวย):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 แสดงรายการไฟล์แบบเรียกซ้ำและแบบละเอียด:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 ดูความช่วยเหลือสำหรับคำสั่ง `ls` อธิบายตัวเลือกทั้งหมด:

    mo ls -h
    mo ls --help

 ### เขียนไฟล์ไปที่ stdout
 คำสั่ง `cat` จะพิมพ์ไฟล์ไปยัง stdout:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 ในจิตวิญญาณของ UNIX ที่แท้จริง *(แต่ไม่ใช่การฝึกฝนอย่างแน่นอน!)* คำสั่ง `cat` **ไม่มีตัวเลือก**
 นอกเหนือจาก `-h` / `--help` เพื่อแสดงข้อมูลที่เป็นประโยชน์

 ### คัดลอกไฟล์
 คัดลอกไฟล์เดียวจากมือถือเครื่องหนึ่งไปยังอีกเครื่องหนึ่ง:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 คัดลอกไฟล์เดียวจากมือถือเครื่องหนึ่งไปยังอีกเครื่องหนึ่งโดยเปลี่ยนชื่อที่ปลายทาง:

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 คัดลอกไดเร็กทอรีซ้ำ ๆ :

    mo cp -r conn1/some/directory conn2/some/dest/

 ดูความช่วยเหลือสำหรับคำสั่ง `cp` อธิบายตัวเลือกทั้งหมด:

    mo cp -h
    mo cp --help

 หมายเหตุ: การคัดลอกไฟล์ทำได้ไม่เร็วนัก เนื่องจากขณะนี้จำเป็นต้องใช้ไฟล์ชั่วคราวตัวกลาง

 ### ลบไฟล์
 ลบไฟล์เดียว:

    mo rm conn1/some/file.txt

 ลบไฟล์เดียวและอย่าบ่นเกี่ยวกับข้อผิดพลาดใดๆ:

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 ลบไดเร็กทอรี:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 ลบไดเร็กทอรีและอย่าบ่นเกี่ยวกับข้อผิดพลาด:

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### ดูข้อมูลเมตา
 การรู้ข้อมูลเมตาของไฟล์มักจะมีประโยชน์ โดยไม่ต้องดาวน์โหลดไฟล์ทั้งไฟล์

 Mobiletto สามารถรายงานขนาดไฟล์และเวลาที่แก้ไขล่าสุด นอกเหนือจากชื่อและประเภท

 ในการดูข้อมูลเมตา:

    mo meta conn1/some/file.txt

 ### มิเรอร์ไดเร็กทอรี
 การทำมิเรอร์เป็นมากกว่ากรณีพิเศษของ `cp` มันเป็นคำสั่ง mobiletto ที่แยกจากกัน
 การดำเนินการคัดลอก; มันยังคงดำเนินต่อไปแม้ในขณะที่เกิดข้อผิดพลาด และติดตามจำนวนความสำเร็จและข้อผิดพลาด

 ในการมิเรอร์ทุกอย่างจาก conn1 เป็น conn2:

    mo mirror conn1 conn2

 ในการมิเรอร์ไดเรกทอรีย่อย:

    mo mirror conn1/some/subdir conn2

 ในการมิเรอร์ไดเร็กทอรีย่อยเป็นไดเร็กทอรีย่อยอื่น:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
