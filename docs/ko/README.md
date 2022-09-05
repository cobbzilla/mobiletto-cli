mobiletto-cli
 =============
 [mobiletto](https://www.npmjs.com/package/mobiletto)용 명령줄 인터페이스(CLI)
 저장.

 Mobiletto는 Amazon S3, Backblaze B2 및 로컬 파일 시스템에 대한 연결을 지원합니다.

 # 다른 언어로 읽어보세요
 이 README.md 문서는 [ `hokeylization` ](https://github.com/cobbzilla/hokeylization)을 통해 다음으로 번역되었습니다.
 **[Google 번역에서 지원하는 모든 언어](https://cloud.google.com/translate/docs/languages)!**

 나는 그것이 완벽하지 않다고 확신하지만, 없는 것보다 나을 수 있기를 바랍니다!

 [🇸🇦 아랍어](../ar/README.md)
 [🇧🇩 벵골어](../bn/README.md)
 [🇩🇪 독일어](../de/README.md)
 [🇺🇸 영어](../en/README.md)
 [🇪🇸 스페인어](../es/README.md)
 [🇫🇷 프랑스어](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 힌디어](../hi/README.md)
 [🇮🇩 인도네시아어](../id/README.md)
 [🇮🇹 이탈리아어](../it/README.md)
 [🇯🇵 일본어](../ja/README.md)
 [🇰🇷 한국어](../ko/README.md)
 [🇮🇳 마란티](../mr/README.md)
 [🇵🇱 폴란드어](../pl/README.md)
 [🇧🇷 포르투갈어](../pt/README.md)
 [🇷🇺 러시아어](../ru/README.md)
 [🇰🇪 스와힐리어](../sw/README.md)
 [🇵🇭 타갈로그어](../tl/README.md)
 [🇹🇷 터키어](../tr/README.md)
 [🇵🇰 우르두어](../ur/README.md)
 [🇻🇳 베트남어](../vi/README.md)
 [🇨🇳 중국어](../zh/README.md)


 **[📚 ... 모든 언어 ...](../README.md)**
 ----

 ### 이 README 번역에 문제가 있습니까?
 원본 [README]의 이 특정 번역(https://github.com/cobbzilla/mobiletto-cli/blob/master/README.md)
 결함이 있을 수 있습니다 -- *수정은 매우 환영합니다!* [GitHub에서 pull 요청](https://github.com/cobbzilla/mobiletto-cli/pulls)을 보내주십시오.
 또는 그렇게 하는 것이 편하지 않다면 [문제 열기](https://github.com/cobbzilla/mobiletto-cli/issues)

 번역에 대한 새 GitHub 문제를 만들 때 다음을 수행하십시오.
 * 페이지 URL 포함(브라우저 주소 표시줄에서 복사/붙여넣기)
 * 잘못된 정확한 텍스트 포함(브라우저에서 복사/붙여넣기)
 * 무엇이 잘못되었는지 설명해주세요 -- 번역이 잘못되었습니까? 형식이 어떻게 든 깨졌습니까?
 * 더 나은 번역을 제안하거나 텍스트 형식을 올바르게 지정하는 방법을 알려주세요.
 * **고맙습니다!**

 ### 원천
 * [GitHub의 mobiletto-cli](https://github.com/cobbzilla/mobiletto-cli)
 * [npm의 mobiletto-cli](https://www.npmjs.com/package/mobiletto-cli)

 # 내용물
 * [설치 및 사용](#설치 및 사용)
 * [npm 패키지](#npm-패키지)
 * [출처 출처](#출처 출처)
 * [커넥션](#커넥션)
 * [연결 만들기](#연결 만들기)
 * [연결 나열](#연결 목록)
 * [Dump 연결 JSON 설정](#Dump-connection-JSON-config)
 * [연결 제거](#연결 제거)
 * [모든 연결 제거](#모든 연결 제거)
 * [저장소 작업](#저장소 작업)
 * [파일 목록](#파일 목록)
 * [표준 출력에 파일 쓰기](#표준 출력에 파일 쓰기)
 * [파일 복사](#파일 복사)
 * [파일 삭제](#파일 삭제)
 * [메타데이터 보기](#메타데이터 보기)
 * [미러 디렉토리](#미러 디렉토리)

 ## 설치 및 사용
 npm을 통해 또는 소스에서 직접 `mobiletto-cli` 를 설치하고 실행할 수 있습니다.

 ### npm 패키지
    # install globally with npm
    npm i -g mobiletto-cli

    # install globally with yarn
    yarn global add mobiletto-cli

    # Now the 'mo' command should be on your PATH
    mo -h
    mo --help

 ### 출처에서
 소스에서 실행하려면 nodejs v16+ 및 yarn이 필요합니다.

    # Clone source and install dependencies
    git clone https://github.com/cobbzilla/mobiletto-cli.git
    cd mobiletto-cli
    yarn install

    # Use the 'mo' command from the git repo
    ./mo -h
    ./mo --help

 ## 연결
 모든 mobiletto 저장소는 연결을 통해 액세스됩니다.

 Mobiletto는 현재 로컬 파일 시스템 스토리지 및 Amazon S3 버킷에 대한 연결을 지원합니다.

 연결은 다음과 같은 JSON 개체로 지정됩니다.

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

 모든 옵션과 해당 값 및 의미에 대한 자세한 내용은 다음을 참조하십시오.
 [모바일레토 문서](https://www.npmjs.com/package/mobiletto#Basic-usage).

 ### 연결 만들기
 새 연결을 만들려면 이러한 JSON 개체 중 하나가 필요합니다.

 대화식으로 생성하거나 파일 또는 JSON 리터럴을 통해 제공할 수 있습니다.

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

 ### 연결 나열
 사용 가능한 연결 나열:

    mo connect -l
    mo connect --list

 ### 덤프 연결 JSON 구성
 연결에 대한 전체 JSON 구성을 표시합니다. **경고** 이렇게 하면 키와 비밀이 stdout에 인쇄됩니다.

    mo connect -d my-conn
    mo connect --dump my-conn

    # pretty-print JSON
    mo connect --verbose --dump my-conn
    mo connect -vd my-conn

 ### 연결 제거
 단일 연결 제거:

    mo connect -r my-conn
    mo connect --remove my-conn

 ### 모든 연결 제거
 모든 연결 제거:

    mo connect -R
    mo connect --remove-all

 ## 스토리지 작업
 연결을 생성했으면 `ls` , `cp` , `rm` rm` , `meta` 및 `mirror` 작업을 사용하세요.
 그들과 함께 일하기 위해.

 명령에 제공하는 모든 파일 경로에는 연결 이름이 접두사로 추가되어야 합니다.
 참조합니다. 아래 예에서는 `conn1` 과 `conn2` 라는 두 개의 연결이 있다고 가정합니다.

 ### 파일 나열
 list 명령의 출력은 파일을 나타내는 행당 하나씩 일련의 JSON 객체입니다.
 설립하다. 이러한 객체에는 `name` 및 `type` type` 및 기타 필드가 있을 수 있습니다.

    mo ls conn1/some/path

 재귀적으로 파일 나열:

    mo ls -r conn1/some/path
    mo ls --recursive conn1/some/path

 **암호화된 저장소 참고사항**: 암호화된 연결에는 아직 재귀 목록이 지원되지 않습니다.
 한 번에 하나의 파일 디렉토리만 나열할 수 있습니다.

 파일을 장황하게 나열(예쁜 인쇄 JSON):

    mo ls -v conn1/some/path
    mo ls --verbose conn1/some/path

 재귀적이고 장황하게 파일 나열:

    mo ls -vr conn1/some/path
    mo ls --verbose --recursive conn1/some/path

 `ls` 명령에 대한 도움말 보기, 모든 옵션 설명:

    mo ls -h
    mo ls --help

 ### stdout에 파일 쓰기
 `cat` 명령은 파일을 stdout에 출력합니다:

    mo cat conn1/some/file # print to terminal
    mo cat conn1/some/file | some-other-command # use in command pipeline

 진정한 UNIX 정신에서 *(그러나 확실히 실천은 아닙니다!)* mobiletto의 `cat` 명령 **선택 사항이 없습니다**
 유용한 정보를 표시하려면 `-h` / `--help`

 ### 파일 복사
 한 mobiletto에서 다른 것으로 단일 파일 복사:

    mo cp conn1/some/path/to/file conn2/some/dest/path/

 한 mobiletto에서 다른 mobiletto로 단일 파일을 복사하고 대상에서 이름을 바꿉니다.

    mo cp conn1/some/path/to/file conn2/some/dest/path/file2

 재귀 적으로 디렉토리를 복사하십시오.

    mo cp -r conn1/some/directory conn2/some/dest/

 `cp` 명령에 대한 도움말 보기, 모든 옵션 설명:

    mo cp -h
    mo cp --help

 참고: 파일 복사는 현재 중간 임시 파일이 필요하기 때문에 그리 빠르지 않습니다.

 ### 파일 삭제
 단일 파일 삭제:

    mo rm conn1/some/file.txt

 단일 파일을 삭제하고 오류에 대해 불평하지 마십시오.

    mo rm -f conn1/some/file.txt
    mo rm --force conn1/some/file.txt

 디렉토리 삭제:

    mo rm -r conn1/some/directory
    mo rm --recursive conn1/some/directory

 디렉토리를 삭제하고 오류에 대해 불평하지 마십시오.

    mo rm -rf conn1/some/directory
    mo rm --recursive --force conn1/some/directory

 ### 메타데이터 보기
 전체 파일을 다운로드하지 않고 파일의 메타데이터를 아는 것이 종종 유용합니다.

 Mobiletto는 이름과 유형 외에도 파일 크기와 마지막 수정 시간을 보고할 수 있습니다.

 메타데이터를 보려면:

    mo meta conn1/some/file.txt

 ### 미러 디렉토리
 미러링은 `cp` 의 특별한 경우 이상이며, 다음을 래핑하는 별도의 mobiletto 명령입니다.
 복사 작업; 오류가 발생하더라도 계속되고 성공 및 오류 수를 추적합니다.

 conn1에서 conn2로 모든 것을 미러링하려면:

    mo mirror conn1 conn2

 하위 디렉토리를 미러링하려면:

    mo mirror conn1/some/subdir conn2

 하위 디렉토리를 다른 하위 디렉토리로 미러링하려면:

    mo mirror conn1/some/subdir conn2/another/dir

</pre>
