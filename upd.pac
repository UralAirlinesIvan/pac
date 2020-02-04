function FindProxyForURL(url, host) {
if (host ==“mesu.apple.com”)
return “PROXY 127.0.0.1:8080”;
return “DIRECT”;
if (host ==“appldnld.apple.com”)
return “PROXY 127.0.0.1:8080”;
return “DIRECT”;
}