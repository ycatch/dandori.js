
* kmyaccによる電卓サンプル - 2012-02

kmyaccで、サンプルファイル(calc.jsy)を実際の電卓プログラムに変換します。
Windowsのコマンドプロンプトで、次のように実行します。

> kmyacc calc.jsy

これで、calc.jsファイルが生成されました。

この「calc.js」ファイルには、Javascript以外にも、すでに必要なコードとかhtmlが組み込まれているので、これを「calc.html」とファイル名を変更してブラウザで開くと、計算できます。ちゃんと、優先順位やカッコも認識してくれます。


* kmyaccによる簡易スクリプトサンプル - 2012-03

kmyaccで、簡易プログラミング言語をProcessing.jsに変換する試み

> kmyacc script.jsy


*links

http://www.catch.jp/wiki/
http://www.catch.jp/wiki/?%A5%D7%A5%ED%A5%B0%A5%E9%A5%DF%A5%F3%A5%B0%B8%C0%B8%EC%A4%CF%BA%EE%A4%EC%A4%F3%A4%CE%A4%AB%A1%AA


*kmyaccについて

yaccファイルの変換には、kmyaccを使用しています。
kmyacc本体のライセンスは、GPL2です。ただし、kmyaccが生成するコードは(元になるプロトタイプも含め) 従来通りpublic domain(ないし*.yの作者のもの)ですので、 使用上の制限は全くありません。

-kmyaccの情報
http://www005.upp.so-net.ne.jp/kmori/kmyacc/

-kmyaccのソースコード
http://www005.upp.so-net.ne.jp/kmori/kmyacc/kmyacc-4.1.4.tar.gz
http://www.catch.jp/wiki/program/yacc/kmyacc-4.1.4.tar.gz

-実行ファイル
http://aoikujira.com/demo/hakkaku/rc/S7hRMjV3R7qZZsXTUkfnmw_kmyacc-as.zip


