let Number = 67; //*
const BigInt =  12345678901234567890123456783454556567890n;//*
let String = "char *";//*
let Boolean = true;//*
let Null = null;//*
let Undefined;//*
let Obj = Math;//*
let Sym = Symbol("id");//*
let Func = alert;//*

let result = "Number is " + typeof(Number) + "\n" + //*
             "BigInt is " + typeof(BigInt) + "\n" + //*
             "String is " + typeof(String) + "\n" + //*
             "Boolean is "+ typeof(Boolean) + "\n" + //*
             "Null is " +   typeof(Null) + "\n" + //*
             "Undefined is "+ typeof(undefined) + "\n" + //*
             "Obj is " +     typeof(Obj) + "\n" + //*
             "Sym is " +   typeof(Sym) + "\n" + //*
             "Func is " + typeof(Func) + "\n"; //*

window.alert(result);