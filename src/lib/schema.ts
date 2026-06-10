export function injectSchema(schema: Record<string, any>) {
  let script = document.getElementById('schema-injector');
  if (!script) {
    script = document.createElement('script');
    script.id = 'schema-injector';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
}

export function removeSchema() {
  const script = document.getElementById('schema-injector');
  if (script) script.remove();
}
