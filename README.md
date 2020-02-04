# React custom vimeo player placeholder

Embed Vimeo player with a custom placeholder image and play button

### Example

![react-vimeo-placeholder-2](http://matswainson.com/wp-content/uploads/2020/02/react-vimeo-placeholder-2.png)

```js
import Vimeo from 'react-vimeo-placeholder';
import 'react-vimeo-placeholder/dist/style.css';

const MyComponent = () => {
  return <Vimeo
    id="87008050"
    hoverAnimation="backgroundScale"
    highlightColor="rgba(50,100,150,0.5)"
    borderColor="rgba(150,200,250,0.8)"
    playButtonShape="circle"
  />;
}
```

#### Options

| Name | Type | Default | Description |
|-----------|-----------|-------------|-------------|
| borderColor | `string` | `#fff` | Play button border color |
| hoverAnimation | `string` | - | Hover animation - accepts `arrowScale`, `backgroundScale` or `fade` |
| highlightColor | `string` | `rgba(0,0,0,.6)` | Highlight color |
| mini | `boolean` | `false` | Small play button |
| playButtonArrow | `string` | `light` | Play button color - accepts `dark` or `light` |
| playButtonShape | `string` | `square` | Play button shape - accepts `circle`, `square` or `rounded-square` |
| showTitle | `boolean` | `true` | Show or hide video title |

### Browser Support

* Chrome
* Firefox
* Internet Explorer 10 +
* Opera