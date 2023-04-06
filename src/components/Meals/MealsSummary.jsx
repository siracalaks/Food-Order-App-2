import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Lezzet Diyarına, Hoşgeldiniz...</h2>
      <p>
        Geniş yemek yelpazemiz ile sofranızı güzelleştirin. 7/24 hizmetinizdeyiz.
      </p>
      <p>
        Tüm yemeklerimiz yüksek kalite ve hijyenik ortamlarda deneyimli şefrelerimiz tarafından hazırlanmıştır.
      </p>
    </section>
  );
};

export default MealsSummary;