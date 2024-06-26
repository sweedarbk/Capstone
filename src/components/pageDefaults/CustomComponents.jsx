import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `font-medium ${
    level === 1
      ? "text-[80px] font-[600] text-white-100"
      : level === 2
      ? "text-[40px] font-[700] text-white-100"
      : level === 3
      ? "text-[28px] font-[700] text-white-100"
      : level === 4
      ? "text-[24px] font-[600] text-white-100"
      : level === 5
      ? "text-[22px] font-[600] text-white-100"
      : "text-[18px] font-[500] text-purple-800"
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const BodyOne = ({ children, className }) => {
  const classes = "text-lg font-normal text-white-100 mb-4";
  return <p className={`${className} ${classes}`}>{children}</p>;
};

const BodyTwo = ({ children }) => {
  return <p className="text-base font-semibold text-white">{children}</p>;
};

const Caption = ({ children }) => {
  return <p className="text-base font-normal">{children}</p>;
};

const Span = ({ children }) => {
  return <span className="text-xs font-semibold text-white">{children}</span>;
};

const CustomerNavLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px font-medium text-primary-purple cursor-pointer list-none]";
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-purple`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};

const LoginLink = ({ to, className, children }) => {
  const linkStyles =
    "text-[15px font-medium text-primary-purple cursor-pointer list-none";
  return <NavLink to={to} className={`${className} ${linkStyles}`}>{children}</NavLink>;
};

const CartInv = ({ color, children }) => {
  return (
    <div
      className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}
    >
      {children}
    </div>
  );
};

export {
  Title,
  BodyOne,
  BodyTwo,
  Caption,
  Span,
  CustomerNavLink,
  LoginLink,
  CartInv,
};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};
CustomerNavLink.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes.isRequired,
  children: PropTypes.isRequired,
};
LoginLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
BodyOne.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};
BodyTwo.propTypes = {
  children: PropTypes.node.isRequired,
};
Caption.propTypes = {
  children: PropTypes.node.isRequired,
};
Span.propTypes = {
  children: PropTypes.node.isRequired,
};
CartInv.propTypes = {
  color: PropTypes.isRequired,
  children: PropTypes.isRequired,
};
