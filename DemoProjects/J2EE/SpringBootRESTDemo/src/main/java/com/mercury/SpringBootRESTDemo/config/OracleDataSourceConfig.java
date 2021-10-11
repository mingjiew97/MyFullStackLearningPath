//package com.mercury.SpringBootRESTDemo.config;
//
//import java.util.Properties;
//
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//
//import org.hibernate.dialect.Oracle10gDialect;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.boot.jdbc.DataSourceBuilder;
//import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//@Configuration
//@EnableTransactionManagement
//@EnableJpaRepositories(entityManagerFactoryRef = "oracleEntityManagerFactory", transactionManagerRef = "oracleTransactionManager", basePackages = {
//		"com.mercury.SpringBootRESTDemo.dao" })
//public class OracleDataSourceConfig {
//
//	@Primary
//	@Bean(name = "oracleDataSource")
//	@ConfigurationProperties(prefix = "spring.datasource.oracle")
//	public DataSource oracleDataSource() {
//		return DataSourceBuilder.create().build();
//	}
//
//	@Primary
//	@Bean(name = "oracleEntityManagerFactory")
//	public LocalContainerEntityManagerFactoryBean entityManagerFactory(EntityManagerFactoryBuilder builder,
//			@Qualifier("oracleDataSource") DataSource dataSource) {
//		LocalContainerEntityManagerFactoryBean em = builder.dataSource(dataSource).packages("com.mercury.SpringBootRESTDemo.bean").persistenceUnit("msi")
//				.build();
//		em.setJpaProperties(additionalJpaProperties());
//		return em;
//	}
//
//	Properties additionalJpaProperties(){
//        Properties properties = new Properties();
//        properties.setProperty("hibernate.dialect", "org.hibernate.dialect.Oracle10gDialect");
//        return properties;
//    }
//
//	@Primary
//	@Bean(name = "oracleTransactionManager")
//	public PlatformTransactionManager oracleTransactionManager(
//			@Qualifier("oracleEntityManagerFactory") EntityManagerFactory oracleEntityManagerFactory) {
//		return new JpaTransactionManager(oracleEntityManagerFactory);
//	}
//
//}
