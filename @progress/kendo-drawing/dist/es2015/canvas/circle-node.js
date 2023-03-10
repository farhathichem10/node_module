import PathNode from './path-node';

class CircleNode extends PathNode {
    renderPoints(ctx) {
        const { center, radius } = this.srcElement.geometry();

        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    }
}

export default CircleNode;
