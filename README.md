# Realtime Speech to Text

## Description

This is a simple example of how to use the [Speech to Text](https://cloud.google.com/speech-to-text?hl=ja) service in a realtime scenario.

* 参考した記事 [Node real time speech-to-text with Google](https://bebity.medium.com/node-real-time-speech-to-text-with-google-88678ca3ad)

## Requirements

- [Node.js](https://nodejs.org/en/) 8 or higher
- [npm](https://www.npmjs.com/) 5 or higher
- [Google Cloud Platform](https://cloud.google.com/) account with Speech to Text API enabled

* node-record-lpcm16 というマイク音声をNodeプログラムから扱えるライブラリを使用します。
  * [node-record-lpcm16](https://www.npmjs.com/package/node-record-lpcm16)
  * このライブラリは、[SoX](http://sox.sourceforge.net/) というライブラリを使用しています。
    * [SoX](http://sox.sourceforge.net/)
    * SoXは、[Homebrew](https://brew.sh/index_ja) でインストールできます。(Macの場合)
      * `brew install sox`

## Setup

1. [Create a Google Cloud Platform project](https://console.cloud.google.com/projectcreate)
2. [Enable billing](https://support.google.com/cloud/answer/6293499#enable-billing)
3. [Enable Speech to Text API](https://console.cloud.google.com/apis/library/speech.googleapis.com)
4. [Create a service account](https://console.cloud.google.com/apis/credentials/serviceaccountkey) and download the JSON file
5. Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to the path of the JSON file you downloaded
6. Clone this repository
7. `cd` into this repository
8. Run `npm install`

* こちらの記事を参考に認証キーを取得することもできます。
  * [Speech-to-Text API 認証キーの取得](https://nicecamera.kidsplates.jp/help/feature/transcription/authentication_key/)
  * サービスアカウント名、サービスアカウントIDは任意のものでOKです。eg. `speech-to-text`
  * JSONキーは、`****auth-key.json`（***** 任意） で、ルートディレクトリに保存してください。

## Usage

1. Run `npm run start:dev`

