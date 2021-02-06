"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*eslint-disable*/
const react_1 = __importDefault(require("react"));
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
const styles_1 = require("@material-ui/core/styles");
const Icon_1 = __importDefault(require("@material-ui/core/Icon"));
// @material-ui/icons
const Store_1 = __importDefault(require("@material-ui/icons/Store"));
const Warning_1 = __importDefault(require("@material-ui/icons/Warning"));
const DateRange_1 = __importDefault(require("@material-ui/icons/DateRange"));
const LocalOffer_1 = __importDefault(require("@material-ui/icons/LocalOffer"));
const Update_1 = __importDefault(require("@material-ui/icons/Update"));
const ArrowUpward_1 = __importDefault(require("@material-ui/icons/ArrowUpward"));
const AccessTime_1 = __importDefault(require("@material-ui/icons/AccessTime"));
const Accessibility_1 = __importDefault(require("@material-ui/icons/Accessibility"));
const BugReport_1 = __importDefault(require("@material-ui/icons/BugReport"));
const Code_1 = __importDefault(require("@material-ui/icons/Code"));
const Cloud_1 = __importDefault(require("@material-ui/icons/Cloud"));
// core components
const GridContainer_1 = __importDefault(require("@styles/common/Grid/GridContainer"));
const Table_1 = __importDefault(require("@styles/common/mu/Table/Table"));
const Tasks_1 = __importDefault(require("@styles/common/mu/Tasks/Tasks"));
const CustomTabs_1 = __importDefault(require("@styles/common/mu/CustomTabs/CustomTabs"));
const Card_1 = __importDefault(require("@styles/common/Card/Card"));
const CardHeader_1 = __importDefault(require("@styles/common/Card/CardHeader"));
const CardAvatar_1 = __importDefault(require("@styles/common/Card/CardAvatar"));
const CardIcon_1 = __importDefault(require("@styles/common/Card/CardIcon"));
const CardBody_1 = __importDefault(require("@styles/common/Card/CardBody"));
const CardFooter_1 = __importDefault(require("@styles/common/Card/CardFooter"));
const SnackbarContent_1 = __importDefault(require("@styles/common/mu/Snackbar/SnackbarContent"));
const core_1 = require("@material-ui/core");
const rtlStyle_1 = __importDefault(require("./rtlStyle"));
let bugs = [
    "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن؟",
    "	نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟",
    "همان حال کار آنها به نوعی وابسته به متن می‌باشد",
    "	آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند"
];
let website = [
    "بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته",
    "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟"
];
let server = [
    "گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی؟",
    "از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی ؟",
    "از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟"
];
const useStyles = styles_1.makeStyles(rtlStyle_1.default);
function RTLPage() {
    const classes = useStyles();
    return (<div>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={6} md={3}>
          <Card_1.default>
            <CardHeader_1.default color="warning" stats icon>
              <CardIcon_1.default color="warning">
                <Icon_1.default>content_copy</Icon_1.default>
              </CardIcon_1.default>
              <p className={classes.cardCategory}>فضا مصرف شده</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader_1.default>
            <CardFooter_1.default stats>
              <div className={classes.stats}>
                  <Warning_1.default />
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  فضای بیشتری داشته باشید...
                </a>
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={6} md={3}>
          <Card_1.default>
            <CardHeader_1.default color="success" stats icon>
              <CardIcon_1.default color="success">
                <Store_1.default />
              </CardIcon_1.default>
              <p className={classes.cardCategory}>سود</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader_1.default>
            <CardFooter_1.default stats>
              <div className={classes.stats}>
                <DateRange_1.default />
                ۲۴ ساعت اخیر
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={6} md={3}>
          <Card_1.default>
            <CardHeader_1.default color="danger" stats icon>
              <CardIcon_1.default color="danger">
                <Icon_1.default>info_outline</Icon_1.default>
              </CardIcon_1.default>
              <p className={classes.cardCategory}>مشکلات حل شده</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader_1.default>
            <CardFooter_1.default stats>
              <div className={classes.stats}>
                <LocalOffer_1.default />
                توسط گیت‌هاب
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={6} md={3}>
          <Card_1.default>
            <CardHeader_1.default color="info" stats icon>
              <CardIcon_1.default color="info">
                <Accessibility_1.default />
              </CardIcon_1.default>
              <p className={classes.cardCategory}>دنبال‌کننده</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader_1.default>
            <CardFooter_1.default stats>
              <div className={classes.stats}>
                <Update_1.default />
                هم‌اکنون
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
      </GridContainer_1.default>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={12} md={4}>
          <Card_1.default chart>
            <CardHeader_1.default color="success">
              
            </CardHeader_1.default>
            <CardBody_1.default>
              <h4 className={classes.cardTitle}>فروش روزانه</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward_1.default className={classes.upArrowCardCategory}/> 55%
                </span>{" "}
                رشد در فروش امروز.
              </p>
            </CardBody_1.default>
            <CardFooter_1.default chart>
              <div className={classes.stats}>
                <AccessTime_1.default /> ۴ دقیقه پیش
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={12} md={4}>
          <Card_1.default chart>
            <CardHeader_1.default color="warning">
              
            </CardHeader_1.default>
            <CardBody_1.default>
              <h4 className={classes.cardTitle}>دنبال کننده‌های ایمیلی</h4>
              <p className={classes.cardCategory}>کارایی آخرین کمپین</p>
            </CardBody_1.default>
            <CardFooter_1.default chart>
              <div className={classes.stats}>
                <AccessTime_1.default /> کمپین دو روز پیش ارسال شد
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={12} md={4}>
          <Card_1.default chart>
            <CardHeader_1.default color="danger">
              
            </CardHeader_1.default>
            <CardBody_1.default>
              <h4 className={classes.cardTitle}>وظایف انجام شده</h4>
              <p className={classes.cardCategory}>کارایی آخرین کمپین</p>
            </CardBody_1.default>
            <CardFooter_1.default chart>
              <div className={classes.stats}>
                <AccessTime_1.default /> کمپین دو روز پیش ارسال شد
              </div>
            </CardFooter_1.default>
          </Card_1.default>
        </core_1.Grid>
      </GridContainer_1.default>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={12} md={6}>
          <CustomTabs_1.default title="وظایف:" headerColor="primary" rtlActive tabs={[
        {
            tabName: "باگ‌ها",
            tabIcon: BugReport_1.default,
            tabContent: (<Tasks_1.default checkedIndexes={[0, 3]} tasksIndexes={[0, 1, 2, 3]} data-tasks={bugs} rtlActive/>)
        },
        {
            tabName: "وبسایت",
            tabIcon: Code_1.default,
            tabContent: (<Tasks_1.default checkedIndexes={[0]} tasksIndexes={[0, 1]} data-tasks={website} rtlActive/>)
        },
        {
            tabName: "سرور",
            tabIcon: Cloud_1.default,
            tabContent: (<Tasks_1.default checkedIndexes={[1]} tasksIndexes={[0, 1, 2]} data-tasks={server} rtlActive/>)
        }
    ]}/>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={12} md={6}>
          <Card_1.default>
            <CardHeader_1.default color="warning">
              <h4 className={classes.cardTitleWhite}>آمار کارکنان</h4>
              <p className={classes.cardCategoryWhite}>
                کارکنان جدید از ۱۵ آبان ۱۳۹۶
              </p>
            </CardHeader_1.default>
            <CardBody_1.default>
              <Table_1.default tableHeaderColor="warning" tableHead={["کد", "نام", "حقوق", "استان"]} tableData={[
        ["1", "احمد حسینی	", "$36,738", "مازندران"],
        ["2", "مینا رضایی	", "$23,789", "گلستان"],
        ["3", "مبینا احمدپور	", "$56,142", "تهران"],
        ["4", "جلال آقایی	", "$38,735", "شهرکرد"]
    ]}/>
            </CardBody_1.default>
          </Card_1.default>
        </core_1.Grid>
      </GridContainer_1.default>
      <GridContainer_1.default>
        <core_1.Grid xs={12} sm={12} md={6}>
          <Card_1.default>
            <CardHeader_1.default color="primary">
              <h4 className={classes.cardTitleWhite}>اعلان ها</h4>
              <p className={classes.cardCategoryWhite}>
                يدويا من قبل أصدقائنا من{" "}
                <a target="_blank" href="https://material-ui-next.com/?ref=creativetime">
                  واجهة المستخدم المادية
                </a>{" "}
                ونصب من قبل{" "}
                <a target="_blank" href="https://www.creative-tim.com/?ref=mdr-rtl-page">
                  الإبداعية تيم
                </a>
                . يرجى التحقق من{" "}
                <a href="#pablo" target="_blank">
                  وثائق كاملة
                </a>
                .
              </p>
            </CardHeader_1.default>
            <CardBody_1.default>
              <SnackbarContent_1.default message={'این یک اعلان است که با کلاس color="warning" ایجاد شده است.'} close color="warning"/>
              <SnackbarContent_1.default message={'این یک اعلان است که با کلاس color="primary" ایجاد شده است.'} close color="primary"/>
              <SnackbarContent_1.default message={"این یک اعلان با دکمه بستن و آیکن است"} close color="info"/>
            </CardBody_1.default>
          </Card_1.default>
        </core_1.Grid>
        <core_1.Grid xs={12} sm={12} md={6}>
          <Card_1.default profile>
            <CardAvatar_1.default profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={'https://images.app.goo.gl/9wRcJhNqgiemVg1Z9'} alt="..."/>
              </a>
            </CardAvatar_1.default>
            <CardBody_1.default profile>
              <h6 className={classes.cardCategory}>مدیرعامل / مدیرفنی</h6>
              <h4 className={classes.cardTitle}>خداداد عزیزی</h4>
              <p className={classes.description}>
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از
                متن‌های آزمایشی و بی‌معنی استفاده می‌کنند ...
              </p>
              <core_1.Button>
                دنبال‌کردن
              </core_1.Button>
            </CardBody_1.default>
          </Card_1.default>
        </core_1.Grid>
      </GridContainer_1.default>
    </div>);
}
exports.default = RTLPage;
//# sourceMappingURL=RTLPage.jsx.map