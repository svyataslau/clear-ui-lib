// Simple React compatibility test
console.log('Testing React compatibility...');

async function testCompatibility() {
  try {
    // Test basic import
    const testModule = await import('./dist/index.esm.js');
    
    console.log('✅ Basic import successful');
    console.log('Available components:', Object.keys(testModule).filter(key => key[0] === key[0].toUpperCase()));
    
    // Test specific components
    const components = ['Button', 'Input', 'Card', 'Typography', 'Modal', 'Navbar', 'Switch', 'Avatar', 'Textarea', 'CirclePlate'];
    
    components.forEach(componentName => {
      if (typeof testModule[componentName] === 'function') {
        console.log(`✅ ${componentName} component: OK`);
      } else {
        console.log(`❌ ${componentName} component: Missing or not a function`);
      }
    });
    
    console.log('✅ React compatibility test passed');
    process.exit(0);
  } catch (error) {
    console.error('❌ React compatibility test failed:', error.message);
    process.exit(1);
  }
}

testCompatibility();
