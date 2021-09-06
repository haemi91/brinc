import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import './swap.scss';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//     },
//     button: {
//       marginRight: theme.spacing(1),
//     },
//     instructions: {
//       marginTop: theme.spacing(1),
//       marginBottom: theme.spacing(1),
//     },
// }));

// function getSteps() {
//     return ['', '', ''];
// }

// function getStepContent(step) {
//     switch (step) {
//       case 0:
//         return '';
//       case 1:
//         return 'What is an ad group anyways?';
//       case 2:
//         return 'This is the bit I really care about!';
//       default:
//         return 'Unknown step';
//     }
//   }
  

function Swap(){
    // const classes = useStyles();
    // const [activeStep, setActiveStep] = React.useState(0);
    // const [skipped, setSkipped] = React.useState(new Set());
    // const steps = getSteps();

    // const isStepOptional = (step) => {
    //     return step === 1;
    // };

    // const isStepSkipped = (step) => {
    //     return skipped.has(step);
    // };

    // const handleNext = () => {
    //     let newSkipped = skipped;
    //     if (isStepSkipped(activeStep)) {
    //     newSkipped = new Set(newSkipped.values());
    //     newSkipped.delete(activeStep);
    //     }

    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped(newSkipped);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    //     // You probably want to guard against something like this,
    //     // it should never occur unless someone's actively trying to break something.
    //     throw new Error("You can't skip a step that isn't optional.");
    //     }

    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped((prevSkipped) => {
    //         const newSkipped = new Set(prevSkipped.values());
    //         newSkipped.add(activeStep);
    //         return newSkipped;
    //     });
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };
    return <>
        <div id="main">
            <section className="section__area index__section__area">
                <div className="inner inner__md">
                    <header className="toggle__head">
                        <div className="toggle__menu">
                            <div className="toggle__container">
                                <button className="toggle__menu__tit active" data-target="tab">Buy BRC</button>
                                <button className="toggle__menu__tit" data-target="tab">Sell BRC</button>
                                <span className="tab__indicator"></span>
                            </div>
                        </div>
                    </header>
                    {/* s :: buy BRC */}
                    <section className="tab-content current" id="tab">
                        {/* s :: table */}
                        <article className="content__index__table">
                            <article className="content__index__head">
                                <p>BRC price</p>
                                <p>24h %</p>
                                <p>7d %</p>
                                <p>Market cap</p>
                                <p>Total Reserves</p>
                            </article>
                            <article className="content__index__body">
                                <div className="content__index__trow">
                                    <p>999,999,999.99</p>
                                    <p className="pointRedColor">-999,999,999.99%</p>
                                    <p className="pointGreenColor">+999,999,999.99%</p>
                                    <p>$999,999,999.99</p>
                                    <div>
                                        <p className="totla__txt">
                                            999,999,999.99
                                            <img src={require("../../media/icons/ico-Layer_1.svg").default} alt=""/>
                                        </p>
                                        <p className="font__sm">~ $999,999,999.99</p>
                                    </div>
                                </div>
                            </article>
                        </article>{/* e :: table */}
                        <article className="content__box">
                            <header className="tit__box">
                                <h2 className="tit">Swap</h2>
                                <div className="cont__settings">
                                    <button type="button" className="btn__settings">
                                        <img src={require("../../media/icons/ico-Gas.svg").default} alt=""/>
                                    </button>
                                    <button type="button" className="btn__settings">
                                        <img src={require("../../media/icons/ico-sliders.svg").default} alt=""/>
                                    </button>
                                </div>
                            </header>
                            <section className="index__section">
                                <article className="index__area">
                                    <div>
                                        <header className="tit__box">
                                            <h3 className="sub__tit">Form</h3>
                                        </header>
                                        <article className="index__area__inneer">
                                            <div className="index__box">
                                                <section className="cont__box">
                                                    <article className="cont__index__box">
                                                        <div className="custom__select__type active">
                                                            <div className="custom__select__area">
                                                                <div className="custom__select" >
                                                                    <span className="custom__select__ico">
                                                                        <img src={require("../../media/icons/icon.svg").default} alt=""/>
                                                                    </span>
                                                                    <span className="custom__select__text">BRC</span>
                                                                    <span className="custom__select__arrow">
                                                                        <img src={require("../../media/icons/ico-arrow.svg").default} alt=""/>
                                                                    </span>
                                                                </div>
                                                                <ul className="custom__select__list">
                                                                    <li data-type="BRC" className="custom__select__option">
                                                                        <span className="ico">
                                                                            <img src={require("../../media/icons/icon.svg").default} alt=""/>
                                                                        </span>
                                                                        <span className="txt">BRC</span>
                                                                    </li>
                                                                    <li data-type="ETH" className="custom__select__option">
                                                                        <span className="ico">
                                                                            <img src={require("../../media/icons/ico-token.svg").default} alt=""/>    
                                                                        </span>
                                                                        <span className="txt">ETH</span>
                                                                    </li>
                                                                    <li data-type="wBTC" className="custom__select__option">
                                                                        <span className="ico">
                                                                            <img src={require("../../media/icons/ico-wbtc.svg").default} alt=""/>
                                                                        </span>
                                                                        <span className="txt">wBTC</span>
                                                                    </li>
                                                                    <li data-type="DAI" className="custom__select__option">
                                                                        <span className="ico">
                                                                            <img src={require("../../media/icons/ico-dai.svg").default} alt=""/>
                                                                        </span>
                                                                        <span className="txt">DAI</span>
                                                                    </li>
                                                                    <li data-type="USDT" className="custom__select__option">
                                                                        <span className="ico">
                                                                            <img src={require("../../media/icons/ico-usdt.svg").default} alt=""/>
                                                                        </span>
                                                                        <span className="txt">USDT</span>
                                                                    </li>
                                                                    <li data-type="USDC" className="custom__select__option">
                                                                        <span className="ico">
                                                                            <img src={require("../../media/icons/ico-usdc.svg").default} alt=""/>
                                                                        </span>
                                                                        <span className="txt">USDC</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="cont__number">
                                                            <p className="txt">
                                                                <input type="number" placeholder="999,999,999.00" className="number__input"/>
                                                            </p>
                                                        </div>
                                                    </article>
                                                    <article className="cont__index__box">
                                                        <div className="bottom__txt">
                                                            <span>Balance</span> : <span>999,999,999</span> <span>ETH</span>
                                                            <button type="button" className="btn__max">MAX</button>
                                                        </div>
                                                        <p className="bottom__txt text-align-right">~ <span>$999,999,999</span></p>
                                                    </article>
                                                </section>
                                            </div>
                                        </article>
                                    </div>
                                </article>
                                <div className="arrow__hr__box">
                                    <p className="arrow__hr">
                                        <span className="ico_arrow">
                                            <img src={require("../../media/icons/ico-right-arrow.svg").default} alt=""/>
                                        </span>
                                        <span className="ico_arrow">
                                            <img src={require("../../media/icons/ico-left-arrow.svg").default} alt=""/>
                                        </span>
                                    </p>
                                </div>
                                <article className="index__area">
                                    <div>
                                        <header className="tit__box">
                                            <h3 className="sub__tit">To</h3>
                                        </header>
                                        <article className="index__area__inneer">
                                            <div className="index__box">
                                                <section className="cont__box">
                                                    <article className="cont__index__box">
                                                        <div className="custom__select__type active">
                                                            <div className="custom__select__area">
                                                                <div className="custom__select" >
                                                                    <span className="custom__select__ico">
                                                                        <img src={require("../../media/icons/icon.svg").default} alt=""/>
                                                                    </span>
                                                                    <span className="custom__select__text">BRC</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cont__number">
                                                            <p className="txt">
                                                                <input type="number" placeholder="999,999,999.00" className="number__input"/>
                                                            </p>
                                                        </div>
                                                    </article>
                                                    <article className="cont__index__box">
                                                        <div className="bottom__txt">
                                                            <span>Balance</span> : <span>999,999,999</span> <span>ETH</span>
                                                            <button type="button" className="btn__max">MAX</button>
                                                        </div>
                                                        <p className="bottom__txt text-align-right">~ <span>$999,999,999</span></p>
                                                    </article>
                                                </section>
                                            </div>
                                        </article>
                                    </div>
                                </article>
                            </section>
                            <article className="index__route">
                                <strong className="tit">Route</strong>
                                <ul className="route__list__box">
                                    <li className="route__item">
                                        <span className="route__ico"><img src={require("../../media/icons/ico-token.svg").default} alt=""/></span>
                                        <span className="route__txt">Approve</span>
                                    </li>
                                    <li className="route__item">
                                        <span className="route__stroke__arrow"><img src={require("../../media/icons/ico-arrow-down.svg").default} alt=""/></span>
                                        <span className="route__ico"><img src={require("../../media/icons/ico-white-dai.svg").default} alt=""/></span>
                                        <span className="route__txt">Swap</span>
                                    </li>
                                    <li className="route__item">
                                        <span className="route__stroke__arrow"><img src={require("../../media/icons/ico-arrow-down.svg").default} alt=""/></span>
                                        <span className="route__ico"><img src={require("../../media/icons/ico-gray.svg").default} alt=""/></span>
                                        <span className="route__txt">Buy BRC</span>
                                    </li>
                                </ul>
                            </article>
                            <article className="index__step">
                                {/* <div>
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};
                                            if (isStepOptional(index)) {
                                                labelProps.optional = <Typography variant="caption"></Typography>;
                                            }
                                            if (isStepSkipped(index)) {
                                                stepProps.completed = false;
                                            }
                                            return (
                                                <Step key={label} {...stepProps}>
                                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                    <div>
                                        {activeStep === steps.length ? (
                                        <div>
                                            <Typography className={classes.instructions}>
                                                All steps completed - you&apos;re finished
                                            </Typography>
                                            <Button onClick={handleReset} className={classes.button}>
                                                Reset
                                            </Button>
                                        </div>
                                        ) : (
                                        <div>
                                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                            <div>
                                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                Back
                                            </Button>

                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Approve'}
                                            </Button>
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                </div> */}
                            </article>
                        </article>
                    </section>{/* e :: buy BRC */}
                </div>
            </section>
        </div>
    </>
}

export default Swap;