//package com.mercury.SpringBootRESTDemo.config;
//
//import java.util.Properties;
//
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.boot.jdbc.DataSourceBuilder;
//import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//@Configuration
//@EnableTransactionManagement
//@EnableJpaRepositories(entityManagerFactoryRef = "pgEntityManagerFactory", transactionManagerRef = "pgTransactionManager", basePackages = {
//		"com.mercury.SpringBootRESTDemo.pgdao" })
//public class PGDataSourceConfig {
//
//	@Bean(name = "pgDataSource")
//	@ConfigurationProperties(prefix = "spring.datasource.pg")
//	public DataSource pgDataSource() {
//		return DataSourceBuilder.create().build();
//	}
//
//	@Bean(name = "pgEntityManagerFactory")
//	public LocalContainerEntityManagerFactoryBean entityManagerFactory(EntityManagerFactoryBuilder builder,
//			@Qualifier("pgDataSource") DataSource dataSource) {
//		LocalContainerEntityManagerFactoryBean em = builder.dataSource(dataSource).packages("com.mercury.SpringBootRESTDemo.pgbean").persistenceUnit("msi")
//				.build();
//		em.setJpaProperties(additionalJpaProperties());
//		return em;
//	}
//
//	Properties additionalJpaProperties() {
//		Properties properties = new Properties();
//		properties.setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQL95Dialect");
//		return properties;
//	}
//
//	@Bean(name = "pgTransactionManager")
//	public PlatformTransactionManager pgTransactionManager(
//			@Qualifier("pgEntityManagerFactory") EntityManagerFactory pgEntityManagerFactory) {
//		return new JpaTransactionManager(pgEntityManagerFactory);
//	}
//
//}
