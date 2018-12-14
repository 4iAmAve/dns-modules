## Creating a Self-Signed SSL Certificate

### Prerequisites
 
The openssl library is required to generate your own certificate. Run the following command in your local environment to see if you already have openssl installed installed.

```shell
which openssl
/usr/bin/openssl
```

### Generate private key and certificate signing request

A private key and certificate signing request are required to create an SSL certificate. These can be generated with a few simple commands.

When the openssl req command asks for a “challenge password”, just press return, leaving the password empty. This password is used by Certificate Authorities to authenticate the certificate owner when they want to revoke their certificate. Since this is a self-signed certificate, there’s no way to revoke it via CRL (Certificate Revocation List).

```shell
openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
```

```shell
openssl rsa -passin pass:x -in server.pass.key -out server.key
> writing RSA key
```

```shell
rm server.pass.key
```

```shell
openssl req -new -key server.key -out server.csr
```

### Generate SSL certificate

The self-signed SSL certificate is generated from the server.key private key and server.csr files.

```shell
openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
```
