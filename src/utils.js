function containsTag(str, tagName) {
    const regex = new RegExp(`<${tagName}>.*?</${tagName}>`, "gs"); // Case-sensitive match
    return regex.test(str); // Returns true if tag exists
}
  
function removeTag(str, tagName) {
    const regex = new RegExp(`<${tagName}>.*?</${tagName}>`, "gis"); // Case-insensitive
    return str.replace(regex, ""); // Remove matched tag and content
}
  

// this function should return a completly usable IOS File for the OpenVPN driver
function makeUsableIOSOpenVPN(configOpenVPN, pemFile){
    
    if(!configOpenVPN)
        return null

    // check if it already contains all of the nessasary marks
    // and check if it does not contain the pkcs12
    if( containsTag(configOpenVPN, 'ca') && containsTag(configOpenVPN, 'cert') &&  containsTag(configOpenVPN, 'key') && !containsTag(configOpenVPN, 'pkcs12') )
        return configOpenVPN

    if(!pemFile)
        return null
    
    configOpenVPN = removeTag(configOpenVPN, 'pkcs12')

    // mac does not like this
    configOpenVPN = configOpenVPN.replace('            route-delay 2', '')
    
    // join openvpn config and pemfile
    return [configOpenVPN.trimEnd(),'\n', pemFile ].join('')
    
} 

export default makeUsableIOSOpenVPN