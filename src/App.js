import { EngageContext, Elements } from '@poool/react-engage';

export default () => {
  return (
    <EngageContext appId="155PF-L7Q6Q-EB2GG-04TF8">
      <div>An engage element should be displayed below</div>
      <div>------------------</div>
      <div className="reset-box" />
      <div>------------------</div>
      <Elements />
    </EngageContext>
  );
};
