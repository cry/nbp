# NIST Bad Passwords (NBP)

Referencing [Special Publication 800-63-3: Digital Authentication Guidelines](https://github.com/usnistgov/800-63-3), NIST has put out a new standard for password verification and storage. One of these recommended new measures is the validation of passwords against a known blacklist of common passwords.

NBP aims to make this recommendation easier to meet. Developers need only to query the library to determine if the password is part of their requested password list.