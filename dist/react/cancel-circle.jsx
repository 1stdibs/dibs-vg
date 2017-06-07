const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-cancel-circle'].join(' ')} data-tn={'cancel-circle'}viewBox="0 0 250 250">
  <path fill="#010101" d="M125.2-0.2C56.2-0.2,0,56,0,125s56.2,125.2,125.2,125.2c69.1,0,125.2-56.1,125.2-125.1S194.2-0.2,125.2-0.2z M125.3,241.1C61.2,241.1,9.1,189,9.1,125S61.2,8.8,125.2,8.8c64.1,0,116.3,52,116.3,116.1S189.4,241.1,125.3,241.1z"/>
  <polygon fill="#010101" points="162.9,100.5 150.2,87.8 124.8,113.3 98.2,86.8 85.5,99.5 112,126 85,153 97.7,165.7 124.8,138.7 150.7,164.7 163.4,152 137.5,126"/>
</svg>
        );
    }
}
module.exports = Component;
