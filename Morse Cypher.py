#!/usr/bin/env python
# -*- coding: utf-8 -*-

codigo_morse = {

    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", 
    "g": "--.", "h": "....", "i": "..", "j": "·---", "k": "-.-", "l": ".-..", 
    "m": "--", "n": "-.", "ñ": "--.--", "o": "---", "p": ".__.", "q": "--.-",
    "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--",
    "x": "-..-", "y": "-.--", "z": "--..",
    
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", 
    "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
    
    ".": ".-.-.-", ",": "-.-.--", "?": "..--..", "\"": ".-..-."}

texto_codificado = ''
palabra = input("Ingrese una palabra o texto a codificar: ")

for c in palabra:
    if c != " " and c.lower() in codigo_morse:
        texto_codificado += codigo_morse[c.lower()] + " "
    else:
        texto_codificado += c
    
print("Texto codificado: {}".format(texto_codificado))


