# Getting Started 

This project was created, to convert the OpenVPN Config file which can be exported from the SinemaRC Web Interface. The OpenVPN needs some changes which must be done manually to be able to work on an IOS device. To help SinemaRC user to simplify this process they can use this converter tool. 

## Access the App

You can view the deployed application by clicking the link below:

[Open the Application](https://andreasscharf.github.io/sinemarc-ios-converter)

## Usage


Export the OVPN and PEM files from your SinemaRC Web Interface

```
https://{your-domain}/pki/my/certificate/export/
```

Enter the two Files into the web application, and press "download". The application will remove the pkcs12 certificate and replace it with the ssl chain form the pem file. The application also makes sure no spaces and returns are missing.

## Legal Disclaimer

This project is provided as a <strong>free and open tool</strong> for anyone to use. It is developed with the sole purpose of helping users and does not generate any commercial benefit.

## No Affiliation

This project is provided as a <strong>free and open tool</strong> for anyone to use. It is developed with the sole purpose of helping users and does not generate any commercial benefit.

## Privacy & Security

For privacy reasons, <strong>all processing happens locally in your browser</strong>. No files, data, or user inputs are transmitted to any external server or stored remotely.


## No Warranty

This software is provided <strong>"as is"</strong> without any warranties or guarantees. The author is <strong>not responsible for any issues, data loss, or damages</strong> arising from its use.

By using this tool, you acknowledge and accept these terms.
