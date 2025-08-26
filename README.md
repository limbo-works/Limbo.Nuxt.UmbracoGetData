# @limbo-works/umbraco-get-data

A Nuxt 3 module that provides seamless integration with Umbraco's SPA API, enabling easy data fetching and server-side rendering with Umbraco CMS.

## Features

- 🚀 **Client-side API**: Access Umbraco data through the `$umbracoClient` plugin
- 🔄 **Server-side Proxy**: Built-in API proxy for secure backend communication
- 🎯 **SSR Support**: Full server-side rendering compatibility
- 🔧 **Configurable**: Flexible configuration options for different environments
- 🍪 **Cookie Handling**: Automatic cookie forwarding for authentication
- 📱 **Redirect Support**: Built-in handling for redirects and status codes
- ⚡ **TypeScript**: Full TypeScript support

## Installation

Install the package:

```bash
yarn add @limbo-works/umbraco-get-data -D
```

## Basic Usage

Add the module to your `nuxt.config.js`:

```javascript
export default defineNuxtConfig({
  modules: [
    '@limbo-works/umbraco-get-data',
  ],
});
```

Use in your components:

```vue
<template>
  <div>
    <h1>{{ data.content.title }}</h1>
    <div v-html="data.content.body"></div>
  </div>
</template>

<script setup>
const { $umbracoClient } = useNuxtApp();

const { data } = await $umbracoClient.fetchData({
  route: '/',
  params: {
    parts: ['content'],
    cache: false
  }
});

// Process the data (handles redirects, status codes, etc.)
const processedData = $umbracoClient.processData(data);
</script>
```

## Configuration

Configure the module in your `nuxt.config.js`:

```javascript
export default defineNuxtConfig({
  modules: [
    '@limbo-works/umbraco-get-data',
  ],
  
  nuxtUmbraco: {
    // Enable/disable the client plugin (default: true)
    addPlugin: true,
    
    // Enable/disable the API proxy (default: true)  
    addApiProxy: true,
    
    // Enable debug logging of data flow (default: false)
    debug: true,
    
    // Custom fetch options passed to all requests
    fetchOptions: {
      timeout: 5000,
      retry: 2,
      headers: {
        'Custom-Header': 'value'
      }
    }
  },
  
  runtimeConfig: {
    // Server-side configuration
    apiKey: process.env.UMBRACO_API_KEY,
    getdataEndpointUrl: '/umbraco/api/spa/getdata/', // Custom endpoint URL
    
    public: {
      // Client-side configuration
      apiDomain: 'https://your-umbraco-backend.com',
      appHost: 'your-frontend-domain.com'
    }
  }
});
```

## API Reference

### `$umbracoClient.fetchData(config)`

Fetches data from the Umbraco API.

**Parameters:**
- `config` (Object): Configuration object
  - `route` (string): The page route to fetch data for
  - `params` (Object): Additional query parameters
    - `parts` (Array): Content parts to include (e.g., `['content', 'navigation']`)
    - `cache` (boolean): Enable/disable caching
    - `navLevels` (number): Navigation levels to include (default: 2)
  - `fetchOptions` (Object): Custom fetch options for this request
  - `cachingOptions` (Object): Caching configuration

**Example:**
```javascript
const data = await $umbracoClient.fetchData({
  route: '/about',
  params: {
    parts: ['content', 'navigation'],
    cache: true,
    navLevels: 3
  },
  fetchOptions: {
    timeout: 10000
  },
  cachingOptions: {
    maxAge: 60,
    name: 'aboutPage',
    getKey: ({ route }) => route
  }
});
```

### `$umbracoClient.processData(data)`

Processes the API response, handling status codes and redirects.

**Parameters:**
- `data` (Object): The response from `fetchData()`

**Returns:**
- Processed data object with proper status code handling

**Example:**
```javascript
const rawData = await $umbracoClient.fetchData({ route: '/' });
const processedData = $umbracoClient.processData(rawData);

// Handles 301 redirects, 404 errors, etc.
if (processedData.meta?.code === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  });
}
```

## Advanced Usage

### Error Handling

```vue
<script setup>
const { $umbracoClient } = useNuxtApp();

try {
  const data = await $umbracoClient.fetchData({
    route: useRoute().path,
    params: {
      parts: ['content']
    }
  });
  
  const processedData = $umbracoClient.processData(data);
  
  if (!processedData || processedData.meta?.code === 404) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
      fatal: true
    });
  }
} catch (error) {
  console.error('Failed to fetch page data:', error);
  throw error;
}
</script>
```

### Custom Fetch Options

```javascript
// Global configuration
export default defineNuxtConfig({
  nuxtUmbraco: {
    fetchOptions: {
      timeout: 8000,
      retry: 3,
      headers: {
        'Accept-Encoding': 'gzip, deflate'
      }
    }
  }
});

// Per-request configuration
const data = await $umbracoClient.fetchData({
  route: '/api-heavy-page',
  fetchOptions: {
    timeout: 15000, // Override global timeout
    retry: 1
  }
});
```

### Working with Authentication

The module automatically forwards cookies and authorization headers:

```javascript
// The module handles cookie forwarding automatically
const data = await $umbracoClient.fetchData({
  route: '/protected-page',
  params: {
    parts: ['content']
  }
});
```

### Debug Logging

Enable debug logging to see what data is flowing through the module:

```javascript
// Enable debug logging in configuration
export default defineNuxtConfig({
  nuxtUmbraco: {
    debug: true
  }
});
```

When debug mode is enabled, the module will log:
- **Client-side**: Request parameters, response data, and processed data
- **Server-side**: Incoming requests, target URLs, backend responses, and errors

Debug logs are prefixed with `[Umbraco Get Data]` for easy identification. Sensitive data like cookies and authorization headers are redacted in server-side logs.

## Module Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `addPlugin` | boolean | `true` | Adds the `$umbracoClient` plugin |
| `addApiProxy` | boolean | `true` | Adds the `/api/data` server handler |
| `fetchOptions` | Object | `null` | Default fetch options for all requests |
| `debug` | boolean | `false` | Enables debug logging of data flow through the module |

## Runtime Config

| Config Key | Type | Description |
|------------|------|-------------|
| `apiKey` | string | API key for Umbraco backend authentication |
| `getdataEndpointUrl` | string | Custom Umbraco API endpoint URL |
| `public.apiDomain` | string | Umbraco backend domain |
| `public.appHost` | string | Frontend application host |

## How It Works

1. **Client Plugin**: Provides `$umbracoClient` with `fetchData()` and `processData()` methods
2. **API Proxy**: Creates a `/api/data` endpoint that forwards requests to your Umbraco backend
3. **Host Detection**: Automatically detects the current host for SSR compatibility
4. **Cookie Forwarding**: Preserves authentication cookies between frontend and backend
5. **Status Handling**: Processes HTTP status codes and handles redirects appropriately

## Requirements

- Nuxt 3.0.0 or higher
- Umbraco CMS with SPA API enabled
- Node.js 16+ (for ES modules support)

## Development

### Setup Development Environment

```bash
# Install dependencies
yarn

# Prepare development environment
yarn dev:prepare

# Start development server with playground
yarn dev

# Build the module
yarn prepack
```

### Project Structure

```
src/
├── module.ts           # Main module definition
└── runtime/
    ├── plugin.js       # Client-side plugin
    └── server/
        └── api/
            └── data.js # Server-side API proxy
```



## License

MIT License - see LICENSE file for details.

## Support

For issues and questions, please use the [GitHub Issues](https://github.com/limbo-works/Limbo.Nuxt.UmbracoGetData/issues) page.
