"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Typography_1 = require("@styles/Typography");
const _utilty_1 = require("@utilty");
const react_1 = __importDefault(require("react"));
const react_spring_1 = require("react-spring");
const style_1 = require("./style");
const SingleBlog = props => {
    const [springProps, setSpringProps] = react_spring_1.useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const blog = props.blog;
    const calc = (x, y) => !_utilty_1.isServer ? [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1] : null;
    const trans = (x, y, s) => !_utilty_1.isServer ? `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})` : null;
    debugger;
    console.log('blog', blog);
    return (<div>
            {blog ? (<div>
                    <div>
                        
                    <div>
                            <Typography_1.H1>{blog.title}</Typography_1.H1>
                        </div>
                        <react_spring_1.animated.div onMouseMove={({ clientX: x, clientY: y }) => setSpringProps({ xys: calc(x, y) })} onMouseLeave={() => setSpringProps({ xys: [0, 0, 1] })} style={{ transform: springProps.xys.interpolate(trans) }}>
                            <style_1.SingleContentGrid src={blog.image.node.sourceUrl}/>
                      </react_spring_1.animated.div>
                    </div>
                    <div key={blog.id}>
                        <Typography_1.H2 dangerouslySetInnerHTML={{ __html: blog.content }}></Typography_1.H2>
                    </div>
                    {blog.author.a}
                
                </div>) : ('')}
        </div>);
};
exports.default = SingleBlog;
//# sourceMappingURL=singleBlog.jsx.map