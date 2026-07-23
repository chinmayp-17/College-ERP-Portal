const fs = require('fs');
const path = require('path');
const componentsDir = path.join('c:/Users/BIT/OneDrive/Desktop/ERP-Portal/erp-portal/client/src/components');

const roles = ['admin', 'faculty', 'student'];

roles.forEach(role => {
  const roleDir = path.join(componentsDir, role);
  const items = fs.readdirSync(roleDir, { withFileTypes: true });
  
  items.forEach(item => {
    let filePath;
    if (item.isDirectory()) {
      const componentName = item.name.charAt(0).toUpperCase() + item.name.slice(1) + '.js';
      filePath = path.join(roleDir, item.name, componentName);
      if(!fs.existsSync(filePath)){
         const fallback = path.join(roleDir, item.name, 'Profile.js');
         if(fs.existsSync(fallback)) filePath = fallback;
      }
    } else if (item.isFile() && item.name.endsWith('Home.js')) {
      filePath = path.join(roleDir, item.name);
    }
    
    if (filePath && fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<Sidebar />') && content.includes('<Body />')) {
        // Remove Header and Sidebar imports
        content = content.replace(/import\s+Header\s+from\s+[\"'].*?Header[\"'];?\r?\n?/g, '');
        content = content.replace(/import\s+Sidebar\s+from\s+[\"'].*?Sidebar[\"'];?\r?\n?/g, '');
        
        // Replace the return block
        const returnRegex = /return\s*\([\s\S]*?<div className=\"bg-\[#d6d9e0\][\s\S]*?<Body \/>[\s\S]*?<\/div>\s*\);\s*\};/m;
        content = content.replace(returnRegex, 'return <Body />;\n};');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
      }
    }
  });
});
